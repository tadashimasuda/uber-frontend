
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css', rel: 'stylesheet' }

    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src:'@/plugins/vee-validate'}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/bulma',
    '@nuxtjs/proxy',
    'nuxt-fontawesome',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "http://localhost:8000/",
    // proxy: true
    prefix: '/api',
  },
  auth: {
    redirect: {
      login: '/login',   // 未ログイン時に認証ルートへアクセスした際のリダイレクトURL
      logout: '/login',  // ログアウト時のリダイレクトURL
      callback: false,   // Oauth認証等で必要となる コールバックルート
      home: '/',         // ログイン後のリダイレクトURL
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'api/auth/login', method: 'post', propertyName: 'token' },
          logout:{url: '/api/auth/logout', method: 'get'},
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' },
        },
      }
    }
  },
  proxy: {
    // "/api": "/"
    '/api': {
      target: 'http://localhost:8000  ',
      pathRewrite: {
        '^/api': '/'
      }
  }
},
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [
      'vee-validate/dist/rules',
    ],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  },
  
}
