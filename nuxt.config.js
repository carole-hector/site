import posts from "~/static/meta/all.js"
const routes = posts.map(post => `/posts/${post.permalink}`)

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'carole',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=2' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes
  },
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios'
  ],
  markdownit: {
    preset: 'default',
    injected: true,
    linkify: true,
    breaks: true,
  },
  plugins: ['~/plugins/vue.js', '~assets/styles/main.css', { src: '~/plugins/vue-lazyload', ssr: false }]
}
