// sw.js
self.addEventListener('install', e => {
    e.waitUntil(
      // depois que o Service Worker estiver instalado,,
  
      caches.open('arkanon').then(cache => {

        return cache.addAll([
          '/sw.js',
          '/index.html',
          
        ]);
      })
    );
   });