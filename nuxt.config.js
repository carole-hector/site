import axios from "axios"
import fs from "fs"
import { pick, zipObj } from "ramda"
import { stringify } from "./core/utils"
import { VIEWS_GETTER_URL } from "./core/constants"
import { posts } from "./nuxt/posts"
import { routes } from "./nuxt/routes"

export default async () => {
  /* Fetch view counts from DB */
  const {
    data: { values }
  } = await axios.get(VIEWS_GETTER_URL)
  const views = zipObj(values[0], values[1])

  return {
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
      link: [
        {
          rel: "preconnect",
          href: "https://sheets.googleapis.com"
        }
      ]
    },
    loading: false,
    css: ["~/styles/index.css", "bulma/css/bulma.css"],
    modules: [
      "@nuxtjs/axios",
      "@nuxtjs/pwa",
      "nuxt-purgecss",
      "@nuxtjs/sitemap"
    ],
    plugins: [
      "~/plugins/vue.js",
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
    build: {
      extractCSS: true,
      extend(config) {
        /* Add view count to all posts */
        posts.forEach(post => {
          post.views = Number(views[post.slug])
          if (!post.date) {
            /* Set today's date for new posts */
            post.date = new Date()
          }
          fs.writeFileSync(`./content/${post.slug}.json`, stringify(post))
        })

        /* Create a lightweight previews file */
        const previews = posts.map(
          pick(["date", "slug", "tags", "title", "views"])
        )
        fs.writeFileSync("./content/post-previews.json", stringify(previews))

        /* Replace url-loader's default test regex to skip png/jpg/gif/svg files */
        const DEFAULT_REGEX = "/\\.(png|jpe?g|gif|svg|webp)$/i"
        const rule = config.module.rules.find(
          rule => rule.test.toString() === DEFAULT_REGEX
        )
        rule.test = /\.(webp)$/

        /* Add custom rule to process svg files with svg-to-vue-component */
        config.module.rules.push({
          test: /\.svg$/,
          use: [
            "vue-loader",
            {
              loader: "svg-to-vue-component/loader"
            }
          ]
        })

        /* Add custom rule to process png/jpg/gif files with responsive-loader */
        config.module.rules.push({
          test: /\.(png|jpe?g|gif)$/,
          loader: "responsive-loader",
          options: {
            name: "img/[hash:7]-[width].[ext]",
            min: 640,
            max: 1080,
            steps: 2,
            placeholder: false,
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
}
