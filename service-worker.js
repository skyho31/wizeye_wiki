"use strict";var precacheConfig=[["/wizeye_wiki/index.html","3f260f39a172e5cad457448a07a682c1"],["/wizeye_wiki/static/css/main.4cf76f67.css","74ef5fb28512fc833837cca419e68474"],["/wizeye_wiki/static/js/main.72bde07e.js","c5bf22a87991da294f56241c5524b9f6"],["/wizeye_wiki/static/media/add_debug.2e09fa75.png","2e09fa75bb5938d4f4d1584337df65c3"],["/wizeye_wiki/static/media/adp_log.7454b3b4.png","7454b3b4027a484cb5012e08ff3b5d37"],["/wizeye_wiki/static/media/aggre_edit.ab87559a.png","ab87559ab6872d72cc48214e995165ad"],["/wizeye_wiki/static/media/aggre_menu.ec42c041.png","ec42c041c7d03773011858c1f7db1b53"],["/wizeye_wiki/static/media/clientside.93897fc9.png","93897fc90baede466bb808ea6897be42"],["/wizeye_wiki/static/media/dataengine_diagram.542588ae.png","542588ae676e84b533b3ce3e3ce96dd2"],["/wizeye_wiki/static/media/dataengine_logo.22423b14.png","22423b146dade9e767bd05742588449b"],["/wizeye_wiki/static/media/debug_output.6414a0a5.png","6414a0a5d15340181435c8cfce540cad"],["/wizeye_wiki/static/media/edit_node.7ac3f14b.png","7ac3f14b58818c6768b0ccea39064935"],["/wizeye_wiki/static/media/final_flow.2a3655a7.png","2a3655a779c36cc3b310983ec0b20d7d"],["/wizeye_wiki/static/media/js.36700bee.png","36700bee9a1831f2691165d291d62d78"],["/wizeye_wiki/static/media/link_aggre.2682b14d.png","2682b14d8f8dcd4f150c8a1f62cbf083"],["/wizeye_wiki/static/media/link_function.3344c597.png","3344c5972df715c7bcc87202f6c14e4a"],["/wizeye_wiki/static/media/link_obj.fe5fede4.png","fe5fede41fa355530377a36ed5ce3934"],["/wizeye_wiki/static/media/link_preview.ad1784d3.png","ad1784d31d58840cc3a6efffbce56c85"],["/wizeye_wiki/static/media/nodered.de2426af.png","de2426afe9a41f1ca35aeb8847b2c64e"],["/wizeye_wiki/static/media/objectTypeEditorWindow.6833acdc.png","6833acdc29214968f1e3a4b47ab55e5e"],["/wizeye_wiki/static/media/preview_aggre.a21c25ad.png","a21c25adbf2d362f25a8cf3b59e15279"],["/wizeye_wiki/static/media/preview_window.5b525aa5.png","5b525aa52ddf5d252b7537304f203936"],["/wizeye_wiki/static/media/process_category.d4834eb2.png","d4834eb2242af5a08657ea19c830b66c"],["/wizeye_wiki/static/media/result.e900a3a4.png","e900a3a41e43bfc6119a2f626bd842b1"],["/wizeye_wiki/static/media/serverside.028fddc1.png","028fddc113ebf54a91625a03d9cc3689"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var i=new URL(e);return"/"===i.pathname.slice(-1)&&(i.pathname+=a),i.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,i,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(i)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var i=new URL(a).pathname;return e.some(function(e){return i.match(e)})},stripIgnoredUrlParameters=function(e,i){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return i.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],i=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,i,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(i){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!i.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var i=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!i.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,i=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(i))||(i=addDirectoryIndex(i,t),e=urlsToCacheKeys.has(i));var n="/wizeye_wiki/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(i=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(i)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(i)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});