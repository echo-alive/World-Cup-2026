var CACHE='wc2026_v4';
var TESSDATA_FILES=['tessdata/chi_sim.traineddata'];
self.addEventListener('install',function(e){
    e.waitUntil(caches.open(CACHE).then(function(cache){return cache.addAll(TESSDATA_FILES);}));
    self.skipWaiting();
});
self.addEventListener('fetch',function(e){
    if(TESSDATA_FILES.some(function(f){return e.request.url.indexOf(f)>=0;})||
        e.request.url.match(/\.(js|css|html|png|svg|ico|json)$/)){
        e.respondWith(
            caches.match(e.request).then(function(r){return r||fetch(e.request);})
        );
    }
});
self.addEventListener('activate',function(e){
    e.waitUntil(Promise.all([
        clients.claim(),
        caches.keys().then(function(ks){return Promise.all(ks.map(function(k){return k!==CACHE?caches.delete(k):null;}));})
    ]));
});
