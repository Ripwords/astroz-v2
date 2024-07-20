<script lang="ts" setup>
const description =
  "Astroz is an app that provides utilities for astronomy enthusiasts and astrophotographers.";
useSeoMeta({
  description,
  ogTitle: "Astroz 🌌",
  ogDescription: description,
  ogImage: "/Logo.png",
  ogUrl: "https://astroz-v2.netlify.app",
  twitterTitle: "Astroz 🌌",
  twitterDescription: description,
  twitterImage: "/Logo.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
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
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPwaAssets />
    <ion-app>
      <SplitPane />
    </ion-app>
  </div>
</template>

<style>
.noSelect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.noSelect:hover {
  color: var(--ion-color-primary);
}

/* media query light/dark theme */
@media (prefers-color-scheme: dark) {
  ion-content {
    --background: url("/img/bg.svg") no-repeat center/cover fixed;
  }
}

@media (prefers-color-scheme: light) {
  ion-content {
    --background: url("/img/bg_l.svg") no-repeat center/cover fixed;
  }
}
</style>
