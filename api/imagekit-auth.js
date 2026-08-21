// CODEX PREP — Secure ImageKit client-upload authentication.
// The private ImageKit key NEVER reaches the browser.
const crypto = require('crypto');
const { verifyAdminRequest } = require('../server/firebase-admin');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  const requestOrigin = req.headers.origin || '';
  const allowedOrigins = String(process.env.ALLOWED_ORIGIN || '*')
    .split(',').map(v => v.trim()).filter(Boolean);
  if (allowedOrigins.includes('*')) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  } else if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
    res.setHeader('Access-Control-Allow-Origin', requestOrigin);
    res.setHeader('Vary', 'Origin');
  }

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const admin = await verifyAdminRequest(req);
    const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;

    if (!publicKey || !privateKey) {
      return res.status(500).json({ error: 'ImageKit server credentials are not configured.' });
    }

    const token = crypto.randomUUID();
    // ImageKit requires client-upload authentication to expire in less than one hour.
    const expire = Math.floor(Date.now() / 1000) + 30 * 60;
    const signature = crypto
      .createHmac('sha1', privateKey)
      .update(token + expire)
      .digest('hex');

    return res.status(200).json({
      token,
      signature,
      expire,
      publicKey,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || null,
      adminUid: admin.uid
    });
  } catch (error) {
    const status = Number(error.statusCode) || 500;
    console.error('ImageKit auth error:', error);
    return res.status(status).json({
      error: status === 500 ? 'Could not create secure ImageKit upload credentials.' : error.message
    });
  }
};
