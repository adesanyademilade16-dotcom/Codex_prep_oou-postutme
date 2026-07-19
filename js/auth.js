// ===========================================================
// CODEX PREP — SHARED FIREBASE INIT + AUTH HELPERS
// Import this from any page that needs auth/session state.
// ===========================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signOut as fbSignOut,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  sendPasswordResetEmail, sendEmailVerification, updateProfile,
  GoogleAuthProvider, signInWithPopup, linkWithCredential, EmailAuthProvider
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  getFirestore, doc, setDoc, getDoc, updateDoc, serverTimestamp,
  collection, query, where, getDocs, limit, orderBy, getCountFromServer
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { firebaseConfig, FREE_TRIAL_LIMIT } from "./firebase-config.js";

export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);

// ===========================================================
// PWA setup — runs automatically on every page that imports this
// file (which is almost every page in the app), so individual
// pages don't each need their own manifest link / SW registration.
// ===========================================================
if (typeof document !== 'undefined' && !document.querySelector('link[rel="manifest"]')) {
  const head = document.head;

  const manifestLink = document.createElement('link');
  manifestLink.rel = 'manifest';
  manifestLink.href = '/manifest.json';
  head.appendChild(manifestLink);

  const themeColor = document.createElement('meta');
  themeColor.name = 'theme-color';
  themeColor.content = '#3d2599';
  head.appendChild(themeColor);

  const appleTouchIcon = document.createElement('link');
  appleTouchIcon.rel = 'apple-touch-icon';
  appleTouchIcon.href = '/assets/icons/apple-touch-icon.png';
  head.appendChild(appleTouchIcon);

  const appleCapable = document.createElement('meta');
  appleCapable.name = 'apple-mobile-web-app-capable';
  appleCapable.content = 'yes';
  head.appendChild(appleCapable);

  const favicon32 = document.createElement('link');
  favicon32.rel = 'icon';
  favicon32.sizes = '32x32';
  favicon32.href = '/assets/icons/favicon-32.png';
  head.appendChild(favicon32);
}

if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((e) => console.warn('SW registration failed', e));
  });
}

export {
  onAuthStateChanged, fbSignOut, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification,
  updateProfile, doc, setDoc, getDoc, updateDoc, serverTimestamp,
  collection, query, where, getDocs, limit, orderBy, getCountFromServer,
  GoogleAuthProvider, signInWithPopup, linkWithCredential, EmailAuthProvider
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
  const userSnap = await getDoc(doc(db, "users", uid));
  const tier = userSnap.exists() ? (userSnap.data().subscriptionTier || 'free') : 'free';
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
export function requireAdmin(onReady) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      window.location.href = "../login.html";
      return;
    }
    const isAdmin = await checkIsAdmin();
    if (!isAdmin) {
      window.location.href = "../dashboard.html";
      return;
    }
    onReady(user);
  });
}

// Redirects to login if nobody's signed in. Call at the top of
// any page that requires auth. Returns the user via callback.
export function requireAuth(onReady) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
      return;
    }
    onReady(user);
  });
}

// Sends a signed-out user home; used on dashboard-area pages
// while auth state is still resolving, to avoid a flash of
// protected content.
export function guardShell() {
  const shell = document.getElementById("authGate");
  if (shell) shell.style.display = "none";
}
