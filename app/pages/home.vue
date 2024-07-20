<script lang="ts" setup>
definePageMeta({
  alias: "/",
  icon: "ion:home-outline",
});
</script>
<template>
  <ion-page>
    <Refresher :refresh="() => console.log('Refresh')" />
    <div>HI</div>
  </ion-page>
</template>
