importScripts("https://progressier.app/zSnnChVKnD4XnZuxb0Sj/sw.js");

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
