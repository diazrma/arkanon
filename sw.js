var cache_name = 'arkanon';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cache_name).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/styles.css',
        '/manifest.js',
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(cache_name) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});