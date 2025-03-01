<script setup lang="ts">
  import MainMenu from '@/components/Router.vue';
  import { useRoute, useRouter } from 'vue-router'

  const router = useRouter();
  const route = useRoute();

  let hasRoute = router.hasRoute('portfolio');
</script>

<template>
    <div class="grid grid-flow-col grid-cols-2 bg-slate-900 h-100 w-100 self-place-center place-self-center">
    </div>
</template>