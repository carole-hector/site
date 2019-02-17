import { slugs } from "./content/posts"
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
  css: ["~/styles/index.css", "bulma/css/bulma.css"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "nuxt-purgecss", "@nuxtjs/sitemap"],
  plugins: [
    { src: "~/plugins/vue.js", ssr: true },
    { src: "~/plugins/views.js", ssr: true },
    { src: "~/plugins/offline.js", ssr: false },
    { src: "~/plugins/lazysizes.js", ssr: false }
  ],
  manifest: {
    name: "Carole Hector",
    short_name: "Carole",
    lang: "en",
    start_url: "/",
    background_color: "#fafafa",
    theme_color: "#fff",
    description: "A simply readable recipe site.",
    icons: [
      {
        src: "/img/icon144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/img/icon192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/img/icon512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  },
  workbox: {
    globPatterns: ["**/*.{js,css}", "**/img/*"]
  },
  build: {
    extractCSS: true,
    extend(config) {
      // Find the url-loader rule by regex
      const REGEX = "/\\.(png|jpe?g|gif|svg|webp)$/i"
      const rules = config.module.rules
      const rule = rules.find(rule => rule.test.toString() === REGEX)
      // Update url-loader's test regex in order to skip png/jpg/gif/svg images
      rule.test = /\.(webp)$/
      // Add new rule process svg images with svg-to-vue-component
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          "vue-loader",
          {
            loader: "svg-to-vue-component/loader"
          }
        ]
      })
      // Add new rule process png/jpg/gif images with responsive-loader
      config.module.rules.push({
        test: /\.(png|jpe?g|gif)$/,
        loader: "responsive-loader",
        options: {
          // Place generated images in the same place as url-loader
          name: "img/[hash:7]-[width].[ext]",
          min: 640,
          max: 1080,
          steps: 2,
          placeholder: true,
          quality: 65,
          adapter: require("responsive-loader/sharp")
        }
      })
    }
  },
  generate: {
    routes: [
      "search/sweet",
      "search/savoury",
      ...slugs.map(slug => `posts/${slug}`)
    ]
  }
}
