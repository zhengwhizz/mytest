'use strict';
importScripts('sw-toolbox.js');
toolbox.precache([ "/mytest/vue/ani.html", "/mytest/vue/ani.js" ]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, {
	networkTimeoutSeconds : 5
});