var CACHE='wc2026_v3';
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){
    e.waitUntil(Promise.all([
        clients.claim(),
        caches.keys().then(function(ks){return Promise.all(ks.map(function(k){return caches.delete(k);}));})
    ]));
});
