import colors from 'vuetify/es5/util/colors'
require('dotenv').config()
const main_base_URL = 'https://www.giftedsoftware.com'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  sitemap: {
    hostname: main_base_URL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gifted Software | Design & Development',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Get a beautiful, user-friendly, cutting-edge website custom made for your business.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  loading: {
    color: 'blue',
    height: '5px',
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vuelidate', '~/plugins/gtag'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/firebase',
    '@nuxtjs/dotenv',
    '@nuxtjs/recaptcha'
  ],
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: process.env.SITE_KEY,    // Site key for requests
    version: 3,    // Version
  },
  firebase: {
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,
    },
    services: {
      database: true, // Just as example. Can be any other service.
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
