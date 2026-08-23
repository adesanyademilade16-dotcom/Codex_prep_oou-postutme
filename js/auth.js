// ===========================================================
// CODEX PREP — SHARED FIREBASE INIT + AUTH HELPERS
// Import this from any page that needs auth/session state.
// ===========================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signOut as fbSignOut,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  sendPasswordResetEmail, sendEmailVerification, updateProfile,
  GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult,
  linkWithCredential, EmailAuthProvider, applyActionCode, checkActionCode
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc, addDoc, serverTimestamp,
  collection, query, where, getDocs, limit, orderBy, getCountFromServer
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { firebaseConfig, FREE_TRIAL_LIMIT } from "./firebase-config.js";

export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);

// Authentication must never leave a protected page in an unexplained
// infinite loading state. This timeout does NOT sign users out or redirect
// them; it only exposes a recovery state while the Auth observer remains
// active. A slow connection can therefore still recover normally.
export const AUTH_INIT_TIMEOUT_MS = 12000;

// PWA lifecycle and installation UX are centralized in js/pwa.js.
import "./pwa.js";

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/EFYqVpoCWA39NL6y4ZTt6P?s=cl&p=a&ilr=0';

if (typeof document !== 'undefined') {
  // Install-prompt UX is handled entirely inside js/pwa.js (imported
  // above for its side effects) — it registers its own listeners and
  // shows its own banner independently. Calling a same-named function
  // here would throw (it's not defined in this module's scope; ES
  // modules don't share scope just because one imports another), and
  // since this used to run at top-level module-evaluation time, that
  // throw could break every page importing from auth.js at all.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showWhatsAppBubble);
  } else {
    showWhatsAppBubble();
  }
}

function showWhatsAppBubble() {
  if (document.getElementById('waFloatBubble')) return;

  const bubble = document.createElement('a');
  bubble.id = 'waFloatBubble';
  bubble.href = WHATSAPP_GROUP_URL;
  bubble.target = '_blank';
  bubble.rel = 'noopener';
  bubble.title = 'Join the Codex PREP WhatsApp community';
  bubble.style.cssText = `
    position:fixed;right:16px;bottom:150px;z-index:590;
    width:52px;height:52px;border-radius:50%;
    background:#25D366;box-shadow:0 6px 18px rgba(37,211,102,.45);
    display:flex;align-items:center;justify-content:center;
    text-decoration:none;
  `;
  bubble.innerHTML = `
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.32-1.94 1.36-.5.05-1.02.24-3.42-.74-2.87-1.18-4.68-4.09-4.83-4.28-.14-.19-1.16-1.54-1.16-2.94s.72-2.09.98-2.37c.24-.27.53-.33.7-.33h.5c.16 0 .38-.03.58.44.24.56.79 1.93.86 2.07.07.14.11.3.02.48-.09.19-.14.3-.28.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.63.77 1.9.91.28.14.47.21.53.33.07.12.07.68-.17 1.36Z"/>
    </svg>
  `;
  document.body.appendChild(bubble);
}

if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((e) => console.warn('SW registration failed', e));
  });
}

export {
  onAuthStateChanged, fbSignOut, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification,
  updateProfile, doc, setDoc, getDoc, updateDoc, deleteDoc, addDoc, serverTimestamp,
  collection, query, where, getDocs, limit, orderBy, getCountFromServer,
  GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult,
  linkWithCredential, EmailAuthProvider, applyActionCode, checkActionCode,
};

// ===========================================================
// Returns the user's REAL, currently-active tier — checking
// expiry, not just trusting the (possibly stale) subscriptionTier
// field on the users doc. Every page that gates a feature by tier
// should call this instead of reading users/{uid}.subscriptionTier
// directly, so expired plans are enforced everywhere consistently.
// ===========================================================
export async function getEffectiveTier(uid) {
  const userSnap = await getDoc(doc(db, "users", uid));
  const storedTier = userSnap.exists() ? (userSnap.data().subscriptionTier || 'free') : 'free';

  if (storedTier === 'free') {
    return { tier: 'free', expiresAt: null };
  }

  const subSnap = await getDoc(doc(db, "putme_subscriptions", uid));
  if (!subSnap.exists()) {
    // Tier says paid but there's no subscription record — treat as free.
    return { tier: 'free', expiresAt: null };
  }

  const sub = subSnap.data();
  const now = Date.now();

  if (sub.status !== 'active' || !sub.expiresAt || sub.expiresAt < now) {
    // Plan has lapsed.
    return { tier: 'free', expiresAt: sub.expiresAt || null, expired: true };
  }

  return { tier: sub.plan || storedTier, expiresAt: sub.expiresAt };
}

export const googleProvider = new GoogleAuthProvider();

// Free-tier gets FREE_TRIAL_LIMIT (set in firebase-config.js) CBT attempts,
// total, across all subjects/modes. We don't store a mutable "trials used"
// flag (client can't be trusted to write that — see firestore.rules), so we
// derive it by counting existing putme_attempts docs for this uid.
export async function checkTrialEligibility(uid) {
  const { tier } = await getEffectiveTier(uid);
  if (tier !== 'free') return { tier, canStart: true, used: 0, limit: null, remaining: null };
  const q = query(collection(db, "putme_attempts"), where("uid", "==", uid), limit(FREE_TRIAL_LIMIT + 1));
  const snap = await getDocs(q);
  const used = snap.size;
  const remaining = Math.max(0, FREE_TRIAL_LIMIT - used);
  return { tier, canStart: used < FREE_TRIAL_LIMIT, used, limit: FREE_TRIAL_LIMIT, remaining };
}

// After a Google popup sign-in, check whether we already have
// phone/faculty/course on file. Returns true if the profile is
// complete (safe to go to dashboard), false if the caller should
// redirect to complete-profile.html.
export async function ensureUserDoc(user) {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      fullName: user.displayName || "",
      email: user.email,
      phone: "",
      facultyApplyingTo: "",
      courseApplyingTo: "",
      recommendedSubjects: [],
      subscriptionTier: "free",
      trialsUsed: {},
      createdAt: serverTimestamp(),
      profileComplete: false
    });
    return false;
  }
  const data = snap.data();
  return !!data.profileComplete;
}

// ===========================================================
// Checks whether the signed-in user is an admin WITHOUT ever
// knowing or storing an admin email list client-side. Instead,
// it attempts to read admin_config/settings, which firestore.rules
// only allows admins to read. Success = admin, permission-denied
// error = not admin. This means admin identities never appear
// anywhere in browser-visible code — the rules are the only
// source of truth, exactly as they should be.
// ===========================================================
export async function checkIsAdmin() {
  try {
    await getDoc(doc(db, "admin_config", "settings"));
    return true;
  } catch (e) {
    return false;
  }
}

// Same as requireAuth, but also verifies the signed-in user is an
// admin via checkIsAdmin(). Non-admins get sent back to the
// dashboard rather than seeing any admin content flash on screen.
export function requireAdmin(onReady, options = {}) {
  let settled = false;
  let timeoutId = setTimeout(() => {
    if (!settled && typeof options.onTimeout === 'function') options.onTimeout();
  }, options.timeoutMs || AUTH_INIT_TIMEOUT_MS);

  return onAuthStateChanged(auth, async (user) => {
    settled = true;
    clearTimeout(timeoutId);
    if (typeof options.onState === 'function') options.onState(user ? 'authenticated' : 'unauthenticated', user);
    if (!user) {
      window.location.href = "../login.html";
      return;
    }
    try {
      const isAdmin = await checkIsAdmin();
      if (!isAdmin) {
        window.location.href = "../dashboard.html";
        return;
      }
      onReady(user);
    } catch (e) {
      if (typeof options.onError === 'function') options.onError(e);
    }
  }, (error) => {
    settled = true;
    clearTimeout(timeoutId);
    if (typeof options.onState === 'function') options.onState('error', error);
    if (typeof options.onError === 'function') options.onError(error);
  });
}

// Accounts created before this moment are grandfathered past the email-
// verification gate below — they were able to log in freely before this
// feature existed, and re-locking them out on a rule that didn't apply
// when they signed up would just look like a broken app to them. Only
// accounts created from this point forward are required to verify.
// Set this to the exact date/time you merge this to main, then leave it —
// it's a one-time cutoff, not something to keep bumping.
const EMAIL_VERIFICATION_CUTOFF = new Date("2026-08-21T00:00:00Z").getTime();

function isLegacyAccount(user) {
  const createdAt = user?.metadata?.creationTime ? new Date(user.metadata.creationTime).getTime() : 0;
  return createdAt > 0 && createdAt < EMAIL_VERIFICATION_CUTOFF;
}

export function isGoogleAccount(user) {
  return Array.isArray(user?.providerData) && user.providerData.some((p) => p.providerId === "google.com");
}

// Redirects to login if nobody's signed in. Call at the top of any page
// that requires auth. Optional state callbacks make Auth initialization
// observable without changing the behavior of existing callers.
export function requireAuth(onReady, options = {}) {
  let settled = false;
  let timeoutId = setTimeout(() => {
    if (!settled && typeof options.onTimeout === 'function') options.onTimeout();
  }, options.timeoutMs || AUTH_INIT_TIMEOUT_MS);

  if (typeof options.onState === 'function') options.onState('loading');

  return onAuthStateChanged(auth, async (user) => {
    settled = true;
    clearTimeout(timeoutId);
    if (!user) {
      if (typeof options.onState === 'function') options.onState('unauthenticated');
      window.location.href = "login.html";
      return;
    }

    // Google accounts are checked by PROVIDER, not by the emailVerified
    // flag — Google verifies the address before Firebase ever sees the
    // account, but checking the flag alone means trusting that it's
    // already fresh at this exact instant. Checking providerData answers
    // "did this account sign in through Google" directly, so a Google
    // sign-in can never hit the verification gate no matter how or when
    // the emailVerified flag gets set. Accounts created before
    // EMAIL_VERIFICATION_CUTOFF are grandfathered in (see isLegacyAccount)
    // so existing users aren't suddenly locked out by a rule that didn't
    // exist when they signed up. The cached emailVerified flag can be
    // STALE if they verified in a different tab/device; only pay for a
    // fresh reload() in the boundary case where the cheap cached flag
    // currently says "not verified", so the common case (already
    // verified) stays a single cheap check on every page load rather
    // than a network round-trip every time.
    if (!options.allowUnverified && !isGoogleAccount(user) && !isLegacyAccount(user) && !user.emailVerified) {
      try { await user.reload(); } catch (e) { /* fall through with cached state */ }
      if (!user.emailVerified) {
        window.location.href = "verify-email.html";
        return;
      }
    }

    if (typeof options.onState === 'function') options.onState('authenticated', user);

    // Runs once per browser session (not on every page load — a cheap
    // sessionStorage flag avoids an extra Firestore read on every
    // navigation once it's already been checked). Dynamic import avoids
    // a static circular import with referrals.js, which itself imports
    // from this file. Deliberately not awaited — referral bookkeeping
    // must never delay a page from rendering for its actual purpose.
    const sessionKey = `codex_ref_checked_${user.uid}`;
    if (!sessionStorage.getItem(sessionKey)) {
      sessionStorage.setItem(sessionKey, "1");
      import("./referrals.js").then(({ autoProcessPendingReferral }) => {
        autoProcessPendingReferral(user);
      }).catch(() => {});
    }

    onReady(user);
  }, (error) => {
    settled = true;
    clearTimeout(timeoutId);
    if (typeof options.onState === 'function') options.onState('error', error);
    if (typeof options.onError === 'function') options.onError(error);
  });
}

// Sends a signed-out user home; used on dashboard-area pages
// while auth state is still resolving, to avoid a flash of
// protected content.
export function guardShell() {
  const shell = document.getElementById("authGate");
  if (shell) shell.style.display = "none";
}
