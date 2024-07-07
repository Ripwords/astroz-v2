import Aura from "@primevue/themes/aura"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  experimental: {
    typedPages: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  pwa: {
    workbox: {
      maximumFileSizeToCacheInBytes: 5000000,
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      skipWaiting: true,
    },
    base: "/",
    strategies: "generateSW",
    registerType: "autoUpdate",
    manifest: {
      name: "Astroz 🌌",
      short_name: "Astroz 🌌",
      theme_color: "#285eb5",
      start_url: "/",
    },
    pwaAssets: {
      config: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      type: "module",
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@vite-pwa/nuxt",
    "@primevue/nuxt-module",
  ],
})
