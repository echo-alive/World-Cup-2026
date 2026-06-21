var CACHE='wc2026_v1';
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(clients.claim());});
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
