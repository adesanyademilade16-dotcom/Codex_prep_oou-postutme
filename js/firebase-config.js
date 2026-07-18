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

// Admin emails — mirrors admin_config/settings doc in Firestore,
// kept here too as a fast client-side check. Server rules are
// the real gate; this is just for hiding the admin nav link.
export const ADMIN_EMAILS = [
  "codexhub16@gmail.com",
  "mikejoel895@gmail.com"
];

// How many CBT attempts a Free-tier account gets, total, across every
// subject and mode combined. Change this single number any time you
// want to give free users more (or fewer) trials — nothing else in
// the app needs to change.
export const FREE_TRIAL_LIMIT = 1;
