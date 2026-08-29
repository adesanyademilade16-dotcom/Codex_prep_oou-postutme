// ===========================================================
// CODEX PREP — CENTRAL PWA LIFECYCLE + INSTALL UX
// One registration, one beforeinstallprompt listener, one install API.
// ===========================================================

const PWA_VERSION = 'v5';
const DISMISS_KEY = 'codexPwaInstallDismissedAt';
const DISMISS_FOR_MS = 7 * 24 * 60 * 60 * 1000;

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  window.navigator.standalone === true;

const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
let deferredPrompt = null;

function injectMeta() {
  const head = document.head;
  if (!head.querySelector('link[rel="manifest"]')) {
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = '/manifest.json';
    head.appendChild(link);
  }
  if (!head.querySelector('meta[name="theme-color"]')) {
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = '#3d2599';
    head.appendChild(meta);
  }
  if (!head.querySelector('link[rel="apple-touch-icon"]')) {
    const link = document.createElement('link');
    link.rel = 'apple-touch-icon';
    link.href = '/assets/icons/apple-touch-icon.png';
    head.appendChild(link);
  }
}

async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return null;
  try {
    const registration = await navigator.serviceWorker.register(`/sw.js?${PWA_VERSION}`, { updateViaCache: 'none' });
    // Ask the browser to check for a fresh worker on navigation without
    // forcing a reload or interrupting an active CBT session.
    registration.update().catch(() => {});
    return registration;
  } catch (error) {
    console.warn('Codex PREP PWA registration failed:', error);
    return null;
  }
}

function dismissedRecently() {
  try {
    const value = Number(localStorage.getItem(DISMISS_KEY) || 0);
    return value > 0 && Date.now() - value < DISMISS_FOR_MS;
  } catch {
    return false;
  }
}

function dismissBanner() {
  try { localStorage.setItem(DISMISS_KEY, String(Date.now())); } catch {}
  const banner = document.getElementById('pwaInstallBanner');
  if (!banner) return;
  banner.style.opacity = '0';
  banner.style.transform = 'translateY(12px)';
  setTimeout(() => banner.remove(), 180);
}

async function promptInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice.catch(() => null);
    deferredPrompt = null;
    return result?.outcome || 'dismissed';
  }
  return 'manual';
}

function showManualInstructions() {
  if (isIOS) {
    alert('To install Codex PREP: tap Share in Safari, then choose “Add to Home Screen.”');
  } else {
    alert('Open your browser menu (⋮) and choose “Install app” or “Add to Home screen.”');
  }
}

function shouldShowBanner() {
  if (isStandalone()) return false;
  if (dismissedRecently()) return false;
  const path = window.location.pathname.toLowerCase();
  // Keep installation UX focused on the signed-in product experience.
  return /\/(dashboard|mode-select|profile|analytics|leaderboard|past-questions|pricing)\.html$/.test(path);
}

function showInstallBanner() {
  if (!shouldShowBanner() || document.getElementById('pwaInstallBanner')) return;

  const banner = document.createElement('aside');
  banner.id = 'pwaInstallBanner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Install Codex PREP');
  banner.style.cssText = `
    position:fixed;left:max(12px,env(safe-area-inset-left));right:max(12px,env(safe-area-inset-right));
    bottom:calc(78px + env(safe-area-inset-bottom));z-index:600;
    background:#fff;border:1px solid var(--border,#e4e2f5);border-radius:16px;
    box-shadow:0 14px 38px rgba(20,10,60,.18);display:flex;align-items:center;gap:10px;
    padding:11px 12px;animation:codexPwaIn .24s ease-out;
  `;
  const style = document.createElement('style');
  style.textContent = '@keyframes codexPwaIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}';
  document.head.appendChild(style);

  const logoPath = window.location.pathname.includes('/admin/') ? '../assets/logo.png' : 'assets/logo.png';
  banner.innerHTML = `
    <img src="${logoPath}" alt="" style="width:40px;height:40px;border-radius:10px;object-fit:cover;flex:0 0 auto">
    <div style="flex:1;min-width:0">
      <strong style="display:block;font-size:.8rem;color:#1a1730">Install Codex PREP</strong>
      <span style="display:block;font-size:.68rem;color:#7a7690;margin-top:2px">Add it to your home screen for faster access.</span>
    </div>
    <button type="button" id="pwaInstallAction" style="flex:0 0 auto;background:linear-gradient(135deg,#5b3df0,#3d2599);color:#fff;border:0;border-radius:10px;padding:9px 13px;font-size:.74rem;font-weight:700">Install</button>
    <button type="button" id="pwaInstallDismiss" aria-label="Dismiss install prompt" style="flex:0 0 auto;background:none;border:0;color:#8b8799;font-size:1rem;padding:6px;line-height:1">×</button>
  `;
  document.body.appendChild(banner);

  banner.querySelector('#pwaInstallDismiss').addEventListener('click', dismissBanner);
  banner.querySelector('#pwaInstallAction').addEventListener('click', async () => {
    const outcome = await promptInstall();
    if (outcome === 'manual') showManualInstructions();
    if (outcome === 'accepted') dismissBanner();
    if (outcome === 'dismissed') dismissBanner();
  });
}

function init() {
  injectMeta();
  window.CodexPWA = {
    isStandalone,
    isIOS,
    promptInstall,
    showManualInstructions,
    canInstall: () => !!deferredPrompt,
    dismiss: dismissBanner
  };

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    window.dispatchEvent(new CustomEvent('codexpwaavailable'));
    showInstallBanner();
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    document.getElementById('pwaInstallBanner')?.remove();
    try { localStorage.removeItem(DISMISS_KEY); } catch {}
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showInstallBanner, { once: true });
  } else {
    showInstallBanner();
  }

  registerServiceWorker();
}

init();
