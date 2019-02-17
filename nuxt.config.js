import { slugs } from "./content/posts"
const posts = slugs.map(slug => `posts/${slug}`)
const routes = ["search/sweet", "search/savoury", ...posts]

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
    ]
  },
  loading: false,
  css: ["~/styles/index.css", "bulma/css/bulma.css"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "nuxt-purgecss", "@nuxtjs/sitemap"],
  plugins: [
    "~/plugins/vue.js",
    "~/plugins/views.js",
    "~/plugins/offline.client.js",
    "~/plugins/lazysizes.client.js"
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
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://carolehector.netlify.com/",
    generate: true,
    routes
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
      // Add new rule to process svg images with svg-to-vue-component
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          "vue-loader",
          {
            loader: "svg-to-vue-component/loader"
          }
        ]
      })
      // Add new rule to process png/jpg/gif images with responsive-loader
      config.module.rules.push({
        test: /\.(png|jpe?g|gif)$/,
        loader: "responsive-loader",
        options: {
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
    routes
  }
}
