import BASIC_INFO from './package.json'
require('dotenv').config()
const SITE_NAME = 'ExpoNext by PropertiNEXT'
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: (process.env.SSR === 'true') || false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: `${SITE_NAME}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'version', content: `v${BASIC_INFO.version}` },
      { hid: 'description', name: 'description', content: `${BASIC_INFO.description}` },
      { hid: 'og:title', name: 'og:title', property: 'og:title', content: `${SITE_NAME}` },
      { hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: `${SITE_NAME}` },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: `${SITE_NAME}` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut-icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/custom.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/v-select',
    '~/plugins/v-wizard'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-sweetalert2'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  env: {
    appCode: BASIC_INFO.name,
    appVersion: BASIC_INFO.version,
    appDescription: BASIC_INFO.description
  },

  server: {
    port: process.env.PORT || 6100,
    host: '0.0.0.0'
  },

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: true, // Or `bvCSS: false`
    icons: true,
    config: {
      BImgLazy: { blankColor: '#e5e5e5' }
    }
  },

  proxy: {
    '/webapi/': { target: process.env.URL_API || 'http://localhost:6110', pathRewrite: { '^/webapi/': '' } }
  },

  auth: {
    redirect: {
      login: '/ac/login',
      home: '/dashboard'
    },
    strategies: {
      local: {
        token: { property: 'token', maxAge: 60 * 60 * 3.5 },
        refreshToken: { property: 'refresh_token', maxAge: 60 * 60 * 7 },
        user: { property: '' },
        endpoints: {
          login: { url: '/webapi/auth/login', method: 'post' },
          logout: false,
          user: { url: '/webapi/profile', method: 'get' }
        }
      }
    }
  }
}
