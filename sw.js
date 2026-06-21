var CACHE='wc2026_v2';
var FILES=[
    'https://cdn.jsdelivr.net/npm/tesseract.js-data@4.0.0/4.0.0/chi_sim.traineddata.gz'
];
self.addEventListener('install',function(e){
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE).then(function(c){
            return Promise.all(FILES.map(function(u){
                return fetch(u).then(function(r){if(r.ok)c.put(u,r);});
            })).catch(function(){});
        })
    );
});
self.addEventListener('activate',function(e){
    e.waitUntil(Promise.all([
        clients.claim(),
        caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));})
    ]));
});
self.addEventListener('fetch',function(e){
    if(e.request.url.indexOf('tesseract')>=0||e.request.url.indexOf('jsdelivr.net/npm/tesseract')>=0){
        e.respondWith(
            caches.open(CACHE).then(function(c){
                return c.match(e.request).then(function(r){
                    return r||fetch(e.request).then(function(res){
                        if(res.ok) c.put(e.request,res.clone());
                        return res;
                    });
                });
            })
        );
    }
});
