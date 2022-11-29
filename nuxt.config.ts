import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/styles",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins?.push(vuetify());
      });
    },
    "@nuxtjs-alt/proxy", // needed if using ssr
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
    ssr: {
      noExternal: ["vuetify"],
    },
  },
});
