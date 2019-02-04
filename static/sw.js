importScripts("/_nuxt/workbox.4c4f5ca6.js")

workbox.precaching.precacheAndRoute(
  [
    {
      url: "/_nuxt/01f03a515d1348109119.js",
      revision: "90ddd2600c701b9f0e4b348b7b4f1386"
    },
    {
      url: "/_nuxt/26c17f04879ec11e46e9.js",
      revision: "4d3a45f6658ea54527b8d443095c75ed"
    },
    {
      url: "/_nuxt/340d7af355040dd9f29a.js",
      revision: "8b9d37bb14f8db0eecc0c9ef5a4ec963"
    },
    {
      url: "/_nuxt/3bea0f4a9cd569e6d59d.js",
      revision: "f5c84b6a578a740dcb0a5d87c77a1621"
    },
    {
      url: "/_nuxt/3de6557e66214fa6bcb2.js",
      revision: "53f458f87a82a47eda3a97388f89ff14"
    },
    {
      url: "/_nuxt/5065128b793fba1a5f0a.js",
      revision: "39612e184d001d16f1f4a98ff48171c6"
    },
    {
      url: "/_nuxt/b5edc58436e9f25dc0ea.js",
      revision: "38f3ee75857d9af8ef54b41e6f4cef4d"
    },
    {
      url: "/_nuxt/c191041093738274bf7e.js",
      revision: "1cd238b98445f319b8b77a0b7458b739"
    },
    {
      url: "/_nuxt/d264fe58bc48bbff4e8e.js",
      revision: "6c0641eddc93ae9e34f68f79cb913995"
    },
    {
      url: "/_nuxt/ef9ed25720f105566aad.js",
      revision: "8d52e0bcb6ad62a577bd935f2916b968"
    },
    {
      url: "/_nuxt/img/094aef2.png",
      revision: "094aef22c1687ce4e1cb68c1f1a57043"
    },
    {
      url: "/_nuxt/img/2760373.svg",
      revision: "27603739fe78fee587c7b84873475b61"
    },
    {
      url: "/_nuxt/img/734248d.svg",
      revision: "734248d027cbaac7f03c0d931ec95593"
    },
    {
      url: "/_nuxt/img/fef43c1.svg",
      revision: "fef43c1fd872ef7f1880483d9b63ccf2"
    }
  ],
  {
    cacheId: "carole",
    directoryIndex: "/",
    cleanUrls: false
  }
)

workbox.precaching.precacheAndRoute([
  "/img/springonion-toast.jpg",
  "/img/beetroot-horseradish.jpg",
  "/img/fig-toast.jpg",
  "/img/courgette-toast.jpg",
  "/img/trini-redbeans.jpg"
])

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(
  new RegExp("/_nuxt/.*"),
  workbox.strategies.cacheFirst({}),
  "GET"
)

workbox.routing.registerRoute(
  new RegExp("/.*"),
  workbox.strategies.networkFirst({}),
  "GET"
)
