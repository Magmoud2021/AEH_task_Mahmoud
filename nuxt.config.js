export default {
  server: (function () {
    if (process.env.NODE_ENV !== "development") {
      return {
        host: String(process.env.SERVER_HOST),
        port: process.env.SERVER_PORT,
      };
    }
  })(),
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.HEAD_TITLE,
    base: process.env.API_URL,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.META_DESCRIPTION,
      },
      {
        hid: "google-site-verification",
        name: "google-site-verification",
        content: "4mY65G1wO6ZYUh4Heuddo5uqTIc6amB6DtvSJc39X00",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/survey_logo_ar.png" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
        media: "none",
        onload: "if(media!=='all') media='all'",
      },

      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
        integrity:
          "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl",
        crossorigin: "anonymous",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",
        integrity:
          "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",
        crossorigin: "anonymous",
        defer: true,
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js",
        integrity:
          "sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0",
        crossorigin: "anonymous",
        defer: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  router: {
    linkExactActiveClass: "exact-active-link",
  },

  loading: { color: "#1474be", height: "3px" },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
            { src: '~/plugins/vee-validate.js' },

    { src: '~/plugins/vue-splide.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components/",
    '~/components/unit/',

],

  // Custom Vue configirations
  vue: {
    config: {
      silent: process.env.NODE_ENV !== "development",
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/axios",
    [
      "nuxt-i18n",
      {
        baseUrl: process.env.BASE_URL,
        strategy: "prefix_except_default",
        detectBrowserLanguage: false,
        locales: [
          {
            code: "en",
            file: "en.js",
            iso: "en-US",
          },
          {
            code: "ar",
            file: "ar.js",
            iso: "ar-AR",
          },
        ],
        lazy: true,
        langDir: "lang/",
        defaultLocale: "ar",
        vueI18n: {
          fallbackLocale: "ar",
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { baseURL: process.env.API_URL, proxy: true },
  proxy: { "/api/": process.env.API_URL },

  // Build Configuration: https://go.nuxtjs.dev/config-build
 build: {
        // analyze: true,
        transpile: ['vee-validate/dist/rules'],
    },

  // Project Env
  // Access them through:
  // `this.$config.ENV_NAME`
  // `context.$config.ENV_NAME`
  // or inside template using `$config.ENV_NAME`
  publicRuntimeConfig: {
    ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },
  privateRuntimeConfig: {},
};
