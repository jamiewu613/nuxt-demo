import { createVuetify } from "vuetify";
import { VAlert } from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: { VAlert },
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
