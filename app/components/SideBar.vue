<script lang="ts" setup>
import { capitalize } from "vue";
import { useRouter } from "#imports";

const nuxtRouter = useRouter();
const router = useIonRouter();
const routeMap = new Map();
nuxtRouter.getRoutes().forEach((route) =>
  routeMap.set(route.name, {
    name: capitalize(route.name as string),
    icon: route.meta.icon,
  })
);

const routes = Array.from(routeMap.values());

const isActive = (path: string) => path === nuxtRouter.currentRoute.value.name;
</script>

<template>
  <ion-menu content-id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title class="hover:cursor-pointer" @click="router.replace('/')">
          Astroz 🌌
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item
          v-for="route in routes"
          :key="route.name"
          class="noSelect"
          :class="{
            active: isActive(route.name.toLowerCase()),
          }"
          @click="router.push({ name: route.name.toLowerCase() })"
        >
          <div class="flex items-center gap-2">
            <Icon :name="String(route.icon)" />
            {{ route.name }}
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<style scoped>
.active {
  color: var(--ion-color-primary);
}
</style>
