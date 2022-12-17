'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "125528f328dad66b9dd8868a5ecc0b0a",
"assets/assets/icons/add%2520home.svg": "ced97b65fdaebedb505cb7bafb746192",
"assets/assets/icons/add.svg": "153aeaf3628b847edb392be1fc32d36d",
"assets/assets/icons/advanced%2520search%2520-01.svg": "a0d3f6a27a7e9e80a8d338770927e741",
"assets/assets/icons/alt_energy.svg": "a17bd4a9de59081f4d5ac48994ec05c4",
"assets/assets/icons/area.svg": "0d6d7b7008c495fcdb9d58e3bb44e9a5",
"assets/assets/icons/category.svg": "f38a26ad74c87aadde47cc2e07716736",
"assets/assets/icons/chimney.svg": "0f88190c98d7ba175bbdccbb4e2d1dc3",
"assets/assets/icons/directory-saved-search.svg": "6da0697d3491b8ddab2f16b17c9429a0",
"assets/assets/icons/elevator.svg": "df2935abf03102df106627cbd0f2e057",
"assets/assets/icons/Fav%2520-01.svg": "13ac418b2cbcd8f1354fb06661f1ec7d",
"assets/assets/icons/favorite.svg": "56ef252554c9fac5922ba26ca236cf9d",
"assets/assets/icons/hangar.svg": "246d976acc3f9cb8c0713c326af0b72f",
"assets/assets/icons/history.svg": "47f68a4143d5a39e3f206d7c7ac506fc",
"assets/assets/icons/hotel.svg": "038fefeed74328d8df88964478a6036a",
"assets/assets/icons/location-hotel-01.svg": "f6cac144df800daf42822fbc000d5992",
"assets/assets/icons/log.svg": "7012df8988e9b45d41654f489332888f",
"assets/assets/icons/map-search%2520-01.svg": "8d0ff3e676d9c18db90dfcb939362f3f",
"assets/assets/icons/map-search.svg": "303eba76d7423c5cd0f1e0ee67a56181",
"assets/assets/icons/marker.png": "576e022daecbff61f2a3855ef7b66ee8",
"assets/assets/icons/more-01.svg": "9592b59b9f86b91615b0e4b69aa38c8c",
"assets/assets/icons/normal_map.png": "4be3838a23f4efc3a747c013dc1cc5db",
"assets/assets/icons/pool.svg": "88d3899ce12473dcbc80c0407b7872e9",
"assets/assets/icons/qr-code.svg": "a9a964efa9d150277270fb1cb716e311",
"assets/assets/icons/rock_cover.svg": "ed4b559166f4cc5a74a571b44ae7a9ea",
"assets/assets/icons/sattalite_map.png": "d6143b26d86ccb76046cdd633e43cbfc",
"assets/assets/icons/search%2520log%2520-01.svg": "27a4e97ac46bbabb071de0df4e284b06",
"assets/assets/icons/search-svgrepo-com.svg": "4b6384e25f5edd3911d15aca95e86492",
"assets/assets/icons/services%2520-01.svg": "7f614a035d9d8519542e30f7a5203fe6",
"assets/assets/icons/share.svg": "fc640400175c60cee26a44f395990499",
"assets/assets/icons/stairs.svg": "d91539a24a93aeed6f0b6956e5be8dcc",
"assets/assets/icons/well.svg": "754384e0d2e12569dcd877f45ed7344a",
"assets/assets/images/AcrossMENA%2520_logo.svg": "19b1f9d0b02e7b6c42935c032788543d",
"assets/assets/images/across_mena.jfif": "1d1c5eefa17b856804ec70dc65c15405",
"assets/assets/images/catalogue_background.svg": "881ab3d877051cc70d2251fc6b22bfc7",
"assets/assets/images/catalog_mode.png": "6affae6e5c88e3b9f2228baa9bdef560",
"assets/assets/images/clasic_mode.png": "261402d769cd6ecf243d4aef92cc53fe",
"assets/assets/images/download.png": "7244936cc4f374527b4c1c93689c1670",
"assets/assets/images/home%2520title%2520icon.svg": "e0eddb4de5c80a57f79e99984ea7d24e",
"assets/assets/images/house/house1.jpeg": "d60d4f6d02dc53de6959df93705b8f3b",
"assets/assets/images/house/house2.jpeg": "6a7d72294367699c9db505b62012b9ef",
"assets/assets/images/house/house3.jpeg": "4f106a212c29e2ee2321c51781adf99f",
"assets/assets/images/house/house4.jpeg": "d4d90cee871d55a8bac1b8adf4735ff8",
"assets/assets/images/house1.jpeg": "d60d4f6d02dc53de6959df93705b8f3b",
"assets/assets/images/house2.jpeg": "6a7d72294367699c9db505b62012b9ef",
"assets/assets/images/house3.jpeg": "4f106a212c29e2ee2321c51781adf99f",
"assets/assets/images/house4.jpeg": "d4d90cee871d55a8bac1b8adf4735ff8",
"assets/assets/images/marker.png": "405d0884e8671ef703e2aecb768edcdb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "01157b2ede92868810a6ab0c7ca41602",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "91d1df46480366c2e440ae4df7ddc988",
"/": "91d1df46480366c2e440ae4df7ddc988",
"main.dart.js": "fb04306ee9e9ebe39949af52618dcc0d",
"manifest.json": "081601c82d937b15a4f7ec27310eced9",
"version.json": "76591b007f71caefa492d431ca2ea633"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
