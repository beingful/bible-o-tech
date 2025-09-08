<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { Image } from "@/assets/ts/image";

  let router = ref(useRoute());

  const backToMenuImage = new Image('/back-to-menu.png');
</script>

<template>
  <div class="flex justify-center min-h-max h-full w-full">
    <RouterView/>
  </div>
  <RouterLink id="main-menu-link" to="/" v-show="router.path != '/'">
    <button id="main-menu-button">
      <img class="h-full object-contain rounded-full" :src="backToMenuImage.path" :alt="backToMenuImage.alt" />
    </button>
  </RouterLink>
</template>

<style lang="css" scoped>
  @import "@/assets/css/app.css";
</style>