// ===========================================================
// CODEX PREP — PHONE NUMBER UNIQUENESS GUARD
// Stops the same phone number registering more than one account.
// Not a full identity check (someone with several real phone
// numbers can still get around it) — but a real, free barrier
// against the cheap version of sockpuppet-account fraud, and it
// pairs with the manual-review referral-reward flow as a second
// layer, not a replacement for it.
// ===========================================================
import { db, doc, getDoc, setDoc, serverTimestamp } from "./auth.js";

// Nigerian mobile numbers show up as 11 digits with a leading 0
// (0801...), 13 digits with the 234 country code (234801...), or
// occasionally already just the bare 10-digit core. Reduce all
// three to the same 10-digit key so they collide correctly. Numbers
// that don't match either shape fall back to "digits only" rather
// than being rejected outright — better to under-normalize an
// unusual input than to break signup for it.
export function normalizePhone(raw) {
  const digits = String(raw || '').replace(/\D/g, '');
  if (digits.startsWith('234') && digits.length === 13) return digits.slice(3);
  if (digits.startsWith('0') && digits.length === 11) return digits.slice(1);
  return digits;
}

// Returns { available: true } or { available: false } — never throws,
// so a transient read failure doesn't block signup outright (the
// atomic claim below is still the real enforcement backstop).
export async function checkPhoneAvailable(rawPhone) {
  const key = normalizePhone(rawPhone);
  if (!key) return { available: true, key };
  try {
    const snap = await getDoc(doc(db, 'phone_index', key));
    return { available: !snap.exists(), key };
  } catch (e) {
    console.error('Phone availability check failed:', e);
    return { available: true, key }; // fail open on transient errors — the claim step still enforces uniqueness
  }
}

// Attempts to atomically claim the phone number for this uid.
// Returns true on success, false if it's already taken by someone
// else (or the write failed for any other reason) — the caller
// should treat false as "this account cannot proceed with this
// phone number."
export async function claimPhone(rawPhone, uid) {
  const key = normalizePhone(rawPhone);
  if (!key || !uid) return false;
  try {
    await setDoc(doc(db, 'phone_index', key), { uid, createdAt: serverTimestamp() });
    return true;
  } catch (e) {
    // Most likely: someone else already claimed this exact number —
    // Firestore's !exists() rule rejects the write rather than
    // silently overwriting. Could also be a genuine network error;
    // either way, the caller must not proceed as if it succeeded.
    return false;
  }
}
