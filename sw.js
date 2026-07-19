const CACHE_NAME = "codexprep-static-v1";
const PRECACHE_URLS = [
  "/assets/logo.png",
  "/css/theme.css"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first for EVERYTHING. This app's content (scores, plans,
// questions, prices) changes constantly, so we deliberately don't
// cache pages or app logic - only a couple of static assets get a
// cache fallback, purely so the logo/styling don't break on a
// flaky connection. Never cache HTML or JS here.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
