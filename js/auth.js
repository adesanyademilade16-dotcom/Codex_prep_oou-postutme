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
import { firebaseConfig, ADMIN_EMAILS, FREE_TRIAL_LIMIT } from "./firebase-config.js";

export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);

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

export function isAdminEmail(email) {
  return !!email && ADMIN_EMAILS.includes(email.toLowerCase());
}

// Same as requireAuth, but also verifies the signed-in email is one of
// ADMIN_EMAILS. Non-admins get sent back to the dashboard rather than
// seeing any admin content flash on screen.
export function requireAdmin(onReady) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "../login.html";
      return;
    }
    if (!isAdminEmail(user.email)) {
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
