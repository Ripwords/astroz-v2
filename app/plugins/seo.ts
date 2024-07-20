export default defineNuxtPlugin(() => {
  useHead({
    meta: [
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "color-scheme",
        content: "light dark",
      },
      {
        name: "viewport",
        content:
          "viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
    ],
    title: "Astroz 🌌",
  });
});
