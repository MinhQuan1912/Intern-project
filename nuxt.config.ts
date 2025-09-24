// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@pinia/nuxt", "@vueuse/nuxt", "@nuxt/icon"],

  css: ["~/assets/css/main.css"],
  ssr: true,
  future: {
    compatibilityVersion: 4,
  },
  ui: {
    colorMode: false,
  },

  compatibilityDate: "2024-11-27",
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          rel: "preload",
          as: "style",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
          rel: "preload",
          as: "style",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
      ],
    },
  },
  components: [
    {
      path: "~/components",
      global: true,
    },
  ],
});
