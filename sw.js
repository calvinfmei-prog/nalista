const CACHE = "exclusive-pass-v12";

const arquivos = [
  "/nalista/",
  "/nalista/index.html",
  "/nalista/manifest.json",
  "https://cdn.jsdelivr.net/npm/davidshimjs-qrcodejs@0.0.2/qrcode.min.js",
  "https://html2canvas.hertzen.com/dist/html2canvas.min.js",
  "https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(arquivos))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
