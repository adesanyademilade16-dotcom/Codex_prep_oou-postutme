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
  linkWithCredential, EmailAuthProvider
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc, serverTimestamp,
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

let deferredInstallPrompt = null;
const isStandaloneApp = typeof window !== 'undefined' &&
  (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true);
const isIOSDevice = typeof navigator !== 'undefined' && /iphone|ipad|ipod/i.test(navigator.userAgent);

if (typeof window !== 'undefined' && !isStandaloneApp) {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
  });
}

// ===========================================================
// Install reminder banner — shown once per dismissal, below the
// page header, on every page that imports this file. Not shown
// if already installed, and stays hidden after the student
// dismisses it once (localStorage), so it's a one-time nudge,
// not a nag.
// ===========================================================
function showInstallBanner() {
  if (isStandaloneApp) return;
  if (localStorage.getItem('installBannerDismissed') === '1') return;
  if (document.getElementById('pwaInstallBanner')) return;

  const banner = document.createElement('div');
  banner.id = 'pwaInstallBanner';
  banner.style.cssText = `
    position:fixed;left:14px;right:14px;bottom:78px;z-index:600;
    background:#fff;border-radius:16px;box-shadow:0 12px 32px rgba(20,10,60,.18);
    border:1px solid rgba(0,0,0,.06);
    display:flex;align-items:center;gap:12px;padding:12px 14px;
    animation:pwaBannerIn .35s ease-out;
  `;
  const style = document.createElement('style');
  style.textContent = '@keyframes pwaBannerIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}';
  document.head.appendChild(style);

  const logoPath = window.location.pathname.includes('/admin/') ? '../assets/logo.png' : 'assets/logo.png';
  banner.innerHTML = `
    <img src="${logoPath}" onerror="this.style.display='none'"
         style="width:42px;height:42px;border-radius:11px;flex:0 0 auto;object-fit:cover">
    <div style="flex:1;min-width:0">
      <div style="font-size:.84rem;font-weight:800;color:#1a1730;line-height:1.25">Install Codex PREP</div>
      <div style="font-size:.72rem;color:#7a7690;margin-top:1px">Faster access, works offline</div>
    </div>
    <button type="button" id="pwaBannerInstallBtn" style="flex:0 0 auto;background:linear-gradient(135deg,#5b3df0,#3d2599);color:#fff;border:none;border-radius:10px;padding:9px 16px;font-size:.78rem;font-weight:700;cursor:pointer;white-space:nowrap">Install</button>
    <button type="button" id="pwaBannerCloseBtn" aria-label="Dismiss" style="flex:0 0 auto;background:none;border:none;font-size:1.1rem;color:#b8b4cc;cursor:pointer;padding:2px 4px;line-height:1">✕</button>
  `;
  document.body.appendChild(banner);

  function dismiss() {
    banner.style.transition = 'opacity .2s, transform .2s';
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(14px)';
    setTimeout(() => banner.remove(), 200);
    localStorage.setItem('installBannerDismissed', '1');
  }

  document.getElementById('pwaBannerCloseBtn').addEventListener('click', dismiss);

  document.getElementById('pwaBannerInstallBtn').addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
    } else if (isIOSDevice) {
      alert('To install: tap the Share button in Safari, then "Add to Home Screen."');
    } else {
      alert('Open your browser menu (⋮) and choose "Add to Home Screen" or "Install app."');
    }
    dismiss();
  });
}

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/EFYqVpoCWA39NL6y4ZTt6P?s=cl&p=a&ilr=0';

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showInstallBanner);
    document.addEventListener('DOMContentLoaded', showWhatsAppBubble);
  } else {
    showInstallBanner();
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
  updateProfile, doc, setDoc, getDoc, updateDoc, deleteDoc, serverTimestamp,
  collection, query, where, getDocs, limit, orderBy, getCountFromServer,
  GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult,
  linkWithCredential, EmailAuthProvider
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
