const CACHE_NAME = 'maister-cache-v5';
const ASSETS = [
  './',
  './index.html',
  './index-en.html',
  './ne-zlyvaie-vodu.html',
  './pralka-gude-pry-vidzhymi.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/logo.png',
  './images/qr-stirmaster.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => {
        if (k !== CACHE_NAME) return caches.delete(k);
      }))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then(cacheRes => {
      const fetchPromise = fetch(req).then(networkRes => {
        caches.open(CACHE_NAME).then(cache => {
          cache.put(req, networkRes.clone());
        });
        return networkRes.clone();
      }).catch(()=>{});
      return cacheRes || fetchPromise;
    })
  );
});