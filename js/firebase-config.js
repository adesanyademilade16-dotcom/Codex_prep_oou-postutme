// ===========================================================
// CODEX PREP — FIREBASE CONFIG
// New, separate Firebase project from Codex Study Hub.
// TODO: replace with your real config once you create the
// project in the Firebase console (Project Settings > SDK setup).
// ===========================================================
export const firebaseConfig = {
  apiKey: "AIzaSyDSHThszd3JwWfAkWI25Hj30KJ3h6aG0WE",
  authDomain: "codex-prep.firebaseapp.com",
  projectId: "codex-prep",
  storageBucket: "codex-prep.firebasestorage.app",
  messagingSenderId: "59288182910",
  appId: "1:59288182910:web:5a3c7c809cfea81dd8382f"
};

// Admin status is checked via Firestore rules (see firestore.rules
// and checkIsAdmin() in auth.js) — never listed here, so admin
// identities don't appear anywhere in client-visible code.

// How many CBT attempts a Free-tier account gets, total, across every
// subject and mode combined. Change this single number any time you
// want to give free users more (or fewer) trials — nothing else in
// the app needs to change.
export const FREE_TRIAL_LIMIT = 3;
