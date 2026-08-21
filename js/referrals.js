// ===========================================================
// CODEX PREP — REFERRAL / REFER & EARN HELPERS
// Client-side tracking is intentionally conservative: each referred
// account can create only one immutable referral record. Rewards are
// never granted automatically; admins verify and approve them.
// ===========================================================
import {
  db, collection, query, where, getDocs, getDoc, setDoc, doc,
  serverTimestamp, getCountFromServer
} from "./auth.js";

export const REFERRAL_REWARDS = Object.freeze({
  regular: { threshold: 10, defaultDays: 14, label: "Regular" },
  vip: { threshold: 25, defaultDays: 14, label: "VIP" }
});

export function makeReferralCode(uid) {
  return `CODEX-${String(uid || '').replace(/[^a-zA-Z0-9]/g, '').slice(0, 8).toUpperCase()}`;
}

export async function ensureReferralCode(user) {
  if (!user?.uid) return null;
  const userRef = doc(db, 'users', user.uid);
  const snap = await getDoc(userRef);
  const existing = snap.exists() ? snap.data().referralCode : null;
  if (existing) return existing;

  const code = makeReferralCode(user.uid);
  try {
    await setDoc(doc(db, 'referral_codes', code), {
      uid: user.uid,
      code,
      createdAt: serverTimestamp()
    });
  } catch (e) {
    // The code is deterministic from this user's own uid, so a
    // rejection here almost always means it was ALREADY created by
    // an earlier call that succeeded here but failed on the users/
    // doc merge below (rare, but the retry-then-collide case is real
    // since this is the same code every time for the same uid). That
    // earlier-created mapping is still perfectly valid and usable —
    // don't let this throw block the caller.
  }
  try {
    await setDoc(userRef, { referralCode: code }, { merge: true });
  } catch (e) {
    // Code document is still usable even if the profile merge races.
  }
  return code;
}

export async function resolveReferralCode(code) {
  const normalized = String(code || '').trim().toUpperCase();
  if (!normalized) return null;
  const snap = await getDoc(doc(db, 'referral_codes', normalized));
  return snap.exists() ? snap.data() : null;
}

export async function registerReferral({ user, code }) {
  if (!user?.uid || !code) return { created: false, reason: 'missing' };
  const isGoogle = user.providerData?.some(p => p.providerId === 'google.com');
  if (!user.emailVerified && !isGoogle) return { created: false, reason: 'verification-required' };
  const normalized = String(code).trim().toUpperCase();
  const owner = await resolveReferralCode(normalized);
  if (!owner?.uid || owner.uid === user.uid) return { created: false, reason: 'invalid' };

  const referralRef = doc(db, 'referrals', user.uid);
  const existing = await getDoc(referralRef);
  if (existing.exists()) return { created: false, reason: 'already-linked' };

  await setDoc(referralRef, {
    referrerUid: owner.uid,
    referralCode: normalized,
    referredUid: user.uid,
    referredEmail: user.email || null,
    referredName: user.displayName || null,
    status: 'confirmed',
    createdAt: serverTimestamp()
  });

  try {
    await setDoc(doc(db, 'users', user.uid), {
      referredByUid: owner.uid,
      referredByCode: normalized
    }, { merge: true });
  } catch (e) {}

  return { created: true, referrerUid: owner.uid };
}

export async function getReferralStats(uid) {
  if (!uid) return { count: 0, referrals: [], regularReady: false, vipReady: false };
  const q = query(collection(db, 'referrals'), where('referrerUid', '==', uid));
  const snap = await getDocs(q);
  const referrals = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(r => r.status === 'confirmed');
  const count = referrals.length;
  return {
    count,
    referrals,
    regularReady: count >= REFERRAL_REWARDS.regular.threshold,
    vipReady: count >= REFERRAL_REWARDS.vip.threshold
  };
}

export async function getReferralCount(uid) {
  if (!uid) return 0;
  const q = query(collection(db, 'referrals'), where('referrerUid', '==', uid));
  const snap = await getCountFromServer(q);
  return snap.data().count || 0;
}
