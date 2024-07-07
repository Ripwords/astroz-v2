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
  dir: {
    public: "public",
  },
  devtools: { enabled: true },
  nitro: {
    preset: "netlify-edge",
  },
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
      screenshots: [
        {
          src: "img/screenshots/screenshot-wide.png",
          sizes: "2880x1800",
          type: "image/png",
          form_factor: "wide",
          label: "Astroz 🌌",
        },
        {
          src: "img/screenshots/screenshot-mobile.png",
          sizes: "461x826",
          type: "image/png",
          form_factor: "narrow",
          label: "Astroz 🌌",
        },
      ],
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
