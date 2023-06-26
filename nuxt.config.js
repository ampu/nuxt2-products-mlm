const STORE_ID = `58958138`
const OAUTH_TOKEN = `public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD`
const API_BASE_URL = `https://app.ecwid.com/api/v3/${STORE_ID}`
const DEFAULT_HEADERS = {
  [`Authorization`]: `Bearer ${OAUTH_TOKEN}`,
}

const {GH_PAGES} = process.env
const BASE_URL = GH_PAGES ? `/nuxt2-products-mlm/` : `/`

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
      {rel: `icon`, type: `image/svg+xml`, href: `${BASE_URL}favicon.svg`},
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
  ],

  router: {
    mode: `hash`,
    base: BASE_URL,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: API_BASE_URL,
    progress: true,
    debug: false,
    headers: DEFAULT_HEADERS,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: [
      `~/assets/variables.scss`,
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
