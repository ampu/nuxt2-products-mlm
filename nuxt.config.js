import colors from 'vuetify/es5/util/colors'

const STORE_ID = `58958138`
const OAUTH_TOKEN = `public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD`
const BASE_URL = `https://app.ecwid.com/api/v3/${STORE_ID}`
const DEFAULT_HEADERS = {
  [`Authorization`]: `Bearer ${OAUTH_TOKEN}`,
}

const {GH_PAGES} = process.env

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: `static`,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s - nuxt2-products-mlm`,
    title: `nuxt2-products-mlm`,
    htmlAttrs: {
      lang: `en`,
    },
    meta: [
      {charset: `utf-8`},
      {name: `viewport`, content: `width=device-width, initial-scale=1`},
      {hid: `description`, name: `description`, content: ``},
      {name: `format-detection`, content: `telephone=no`},
    ],
    link: [
      {rel: `icon`, type: `image/x-icon`, href: `/favicon.ico`},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    `@nuxt/typescript-build`,
    // https://go.nuxtjs.dev/stylelint
    `@nuxtjs/stylelint-module`,
    // https://go.nuxtjs.dev/vuetify
    `@nuxtjs/vuetify`,
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    `@nuxtjs/axios`,
    `nuxt-svg-loader`,
  ],

  router: {
    mode: `hash`,
    base: GH_PAGES ? `/nuxt2-products-mlm` : `/`,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: BASE_URL,
    progress: true,
    debug: true,
    headers: DEFAULT_HEADERS,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: [`~/assets/variables.scss`],
    theme: {
      dark: true,
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

  svgLoader: {
    svgoConfig: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
