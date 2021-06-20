const staticArkanon = "arkanon"
const assets = [
  "/",
  "/index.html",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticArkanon).then(cache => {
      cache.addAll(assets)
    })
  )
})