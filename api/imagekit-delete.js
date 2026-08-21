const { verifyAdminRequest } = require('../server/firebase-admin');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    await verifyAdminRequest(req);
    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    if (!privateKey) return res.status(500).json({ error: 'ImageKit is not configured on the server.' });

    const fileId = String(req.body?.fileId || '').trim();
    if (!fileId || !/^[A-Za-z0-9_-]+$/.test(fileId)) {
      return res.status(400).json({ error: 'A valid ImageKit fileId is required.' });
    }

    const response = await fetch(`https://api.imagekit.io/v1/files/${encodeURIComponent(fileId)}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Basic ${Buffer.from(`${privateKey}:`).toString('base64')}`
      }
    });

    if (!response.ok && response.status !== 404) {
      const text = await response.text();
      console.error('ImageKit delete failed:', response.status, text);
      return res.status(502).json({ error: 'ImageKit could not delete the file.' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    const status = Number(error.statusCode) || 500;
    console.error('ImageKit delete error:', error);
    return res.status(status).json({ error: status === 500 ? 'Could not delete the image.' : error.message });
  }
};
