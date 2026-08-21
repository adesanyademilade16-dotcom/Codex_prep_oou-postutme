const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

function getFirebaseAdminApp() {
  if (getApps().length) return getApps()[0];

  // Preferred on Vercel: one JSON environment variable containing the
  // Firebase service-account object. Keep this value server-side only.
  const rawJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (rawJson) {
    let serviceAccount;
    try {
      serviceAccount = JSON.parse(rawJson);
    } catch {
      throw new Error('FIREBASE_SERVICE_ACCOUNT_JSON is not valid JSON.');
    }
    return initializeApp({ credential: cert(serviceAccount) });
  }

  // Backward-compatible alternative for deployments that prefer three vars.
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Missing Firebase Admin environment variables.');
  }

  return initializeApp({
    credential: cert({ projectId, clientEmail, privateKey })
  });
}

async function verifyAdminRequest(req) {
  const header = req.headers.authorization || '';
  if (!header.startsWith('Bearer ')) {
    const err = new Error('Missing Firebase ID token.');
    err.statusCode = 401;
    throw err;
  }

  const idToken = header.slice(7).trim();
  if (!idToken) {
    const err = new Error('Missing Firebase ID token.');
    err.statusCode = 401;
    throw err;
  }

  const decoded = await getAuth(getFirebaseAdminApp()).verifyIdToken(idToken);
  if (decoded.email_verified === false) {
    const err = new Error('Verified admin account required.');
    err.statusCode = 403;
    throw err;
  }

  const configured = (process.env.CODEX_ADMIN_EMAILS || 'codexhub16@gmail.com,bukolaqudus10@gmail.com,mikejoel895@gmail.com')
    .split(',')
    .map(v => v.trim().toLowerCase())
    .filter(Boolean);
  const email = String(decoded.email || '').toLowerCase();

  if (!email || !configured.includes(email)) {
    const err = new Error('Admin access required.');
    err.statusCode = 403;
    throw err;
  }

  return decoded;
}

module.exports = { verifyAdminRequest, getFirebaseAdminApp };
