export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image"],
  css: ["~/assets/main.css"],
  app: {
    head: {
      title: "SMC Docs",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        {
          name: "title",
          content: "Smart Money Concepts Docs - SMC Docs"
        },
        {
          name: "description",
          content: "Stop trading like the dumb money — start thinking like the smart money."
        }
      ]
    }
  }
})