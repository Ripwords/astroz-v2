<script lang="ts" setup>
import type { RefresherCustomEvent } from "@ionic/vue";

const props = withDefaults(
  defineProps<{
    refresh?: (() => void) | (() => Promise<void>);
  }>(),
  {
    refresh: () => {
      window.location.reload();
    },
  }
);

const handleRefresh = async (event: RefresherCustomEvent) => {
  await props.refresh();
  event.target.complete();
};
</script>

<template>
  <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
  <ion-refresher id="refresher" slot="fixed" @ion-refresh="handleRefresh">
    <ion-refresher-content />
  </ion-refresher>
</template>
