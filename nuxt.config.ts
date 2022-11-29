// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    // "@nuxtjs-alt/axios",
    // "@nuxtjs-alt/http",
    "@nuxtjs-alt/proxy", // needed if using ssr
    // "@pinia/nuxt",
  ],
  proxy: {
    enableProxy: true,
    proxies: {
      "/api": {
        target: "http://localhost:80/",
        changeOrigin: true,
      },
    },
    fetch: true,
  },
  vite: {
    define: {
      "process.env.DEBUG": true,
    },
  },
});
