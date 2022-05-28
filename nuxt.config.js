import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios",
    "~/plugins/vuelidate",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    '@nuxtjs/dayjs',
  ],

  router: {
    middleware: ['auth'],
  },

  auth: {
    localStorage: false,
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/dashboard'
    },
    strategies: {
      local: {
        token: {
          property: 'access_token',
          expiresIn: 7200,
        },
        user: {
          property: 'user',
        },
        endpoints: {
          login: {url: '/login', method: 'post'},
          user: {url: '/user', method: 'get'},
          logout: false
        }
      },
    }
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    credentials: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Pay Flow',
      author: 'Eric Lempe',
    },
    manifest: {
      name: 'PayFlow',
      lang: 'pt-br',
      useWebmanifestExtension: false,
      short_name: 'PayFlow',
      description: 'App para gerenciar despesas',
      start_url: '/',
      background_color: '#425c59',
      theme_color: "#425c59",
      display: "standalone",
      orientation: "portrait-primary",
      scope: "/",
    },
    icon: {
      source: '~/static/icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      purpose: 'maskable any'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    treeShake: true,
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
          success: colors.green.accent3
        }
      }
    }
  },

  // Day JS
  dayjs: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
    plugins: [
      'utc',
      'timezone'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
