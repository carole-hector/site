import posts from "./content/posts"
module.exports = {
  head: {
    title: "Carole",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=2"
      },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: false,
  css: [
    "~/styles/index.css",
    "bulma/css/bulma.css",
    "@fortawesome/fontawesome-free/css/all.css"
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],
  plugins: [
    { src: "~/plugins/vue.js", ssr: true },
    { src: "~/plugins/views.js", ssr: true },
    { src: "~/plugins/offline.js", ssr: false }
  ],
  manifest: {
    name: "Carole Hector",
    lang: "en",
    start_url: "/",
    background_color: "#fafafa",
    description: "A simply readable recipe site.",
    icons: [
      {
        src: "/img/icon144.png",
        sizes: "144x144",
        type: "image/png"
      }
    ]
  },
  workbox: {
    globPatterns: ["**/*.{js,css}", "**/img/*"],
    offlineAssets: [...posts.slugs.map(slug => `/img/${slug}.jpg`)]
  },
  generate: {
    routes: [
      "search/sweet",
      "search/savoury",
      ...posts.slugs.map(slug => `posts/${slug}`)
    ]
  }
}
