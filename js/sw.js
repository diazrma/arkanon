const cache_name = 'static-v1';

addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;     // if valid response is found in cache return it
          } else {
            return fetch(event.request)     //fetch from internet
              .then(function(res) {
                return caches.open(CACHE_DYNAMIC_NAME)
                  .then(function(cache) {
                    cache.put(event.request.url, res.clone());    //save the response for future
                    return res;   // return the fetched data
                  })
              })
              .catch(function(err) {       // fallback mechanism
                return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
                  .then(function(cache) {
                    return cache.match('/offline.html');
                  });
              });
          }
        })
    );
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