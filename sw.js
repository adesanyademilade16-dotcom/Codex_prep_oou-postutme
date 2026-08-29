const CACHE_NAME = 'codexprep-static-v5';
const PRECACHE_URLS = [
  '/assets/logo.png',
  '/css/theme.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// Network-first for application pages and Firebase requests. Only the
// small, explicitly precached static assets get a cache fallback. We do
// not cache authenticated data, HTML, JS, Firestore, or Firebase Auth.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // CRITICAL: only intercept requests for the small set of assets we
  // actually precached above. Everything else — every HTML page, every
  // app JS file — passes straight through to a normal, unintercepted
  // fetch. Previously ALL same-origin requests went through a
  // fetch-then-cache-fallback pattern, but since only these two assets
  // were ever actually cached, a fallback lookup for anything else
  // (splash.html, login.html, dashboard.html, ...) found nothing and
  // resolved to `undefined`. A service worker responding with
  // `undefined` is treated by the browser as a hard network error
  // (ERR_FAILED) — meaning ANY momentary network hiccup on ANY page,
  // even ones that would have succeeded a moment later on their own,
  // turned into a full, unrecoverable page-load failure. On real mobile
  // network conditions with fluctuating signal, that happens constantly
  // and unpredictably. Narrowing interception to only what's genuinely
  // cached removes that failure mode entirely for every other page.
  if (!PRECACHE_URLS.includes(url.pathname)) return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
