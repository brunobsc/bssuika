// Service worker: deixa o jogo abrir offline depois da primeira visita.
// Ao atualizar o jogo, mude o número da versão abaixo para os aparelhos pegarem a versão nova.
const CACHE = 'bssuika-v1';
const ASSETS = ['./', './index.html', './vendor/matter.min.js', './manifest.webmanifest', './icon-180.png', './icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  const isPage = request.mode === 'navigate' || url.pathname.endsWith('/index.html');
  if (isPage) {
    // Página: tenta a rede primeiro (para pegar atualizações), cai no cache se estiver offline.
    event.respondWith(
      fetch(request)
        .then(response => { const copy = response.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return response; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Demais arquivos: cache primeiro, rede como reserva.
  event.respondWith(
    caches.match(request).then(hit => hit || fetch(request).then(response => {
      if (response.ok) { const copy = response.clone(); caches.open(CACHE).then(c => c.put(request, copy)); }
      return response;
    }))
  );
});
