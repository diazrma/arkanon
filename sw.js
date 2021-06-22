// sw.js
self.addEventListener('install', e => {
    e.waitUntil(
      // depois que o Service Worker estiver instalado,,
      // abra um novo cache
      caches.open('my-pwa-cache').then(cache => {
        // adicione todas as URLs de recursos que queremos armazenar em cache
        return cache.addAll([
          '/',
          '/index.html',
          '/sobre.html',
          '/images/logo.jpg',
          '/styles/main.min.css',
          '/scripts/main.min.js',
        ]);
      })
    );
   });