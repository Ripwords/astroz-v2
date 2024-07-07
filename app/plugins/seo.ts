export default defineNuxtPlugin(() => {
  useHead({
    meta: [
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    title: "Astroz 🌌",
  })
})
