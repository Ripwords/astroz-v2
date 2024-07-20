<script lang="ts" setup>
import { capitalize } from "vue";

const header = computed(() =>
  capitalize(String(useRouter().currentRoute.value.name))
);
</script>

<template>
  <ion-split-pane when="md" content-id="main">
    <SideBar />

    <div id="main">
      <ion-header>
        <ion-toolbar>
          <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
          <ion-buttons slot="start">
            <ion-menu-button />
          </ion-buttons>
          <ion-title>{{ header }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding w-[100vw]">
        <ion-router-outlet />
      </ion-content>
    </div>
  </ion-split-pane>
</template>
