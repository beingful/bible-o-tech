<script setup lang="ts">
  import ProjectHub from '@/components/ProjectHub.vue';
</script>

<template>
  <div class="project-gallery" :style="{ backgroundAttachment: 'local' }">
    <ProjectHub class="full-size"></ProjectHub>
  </div>
</template>

<style lang="css" scoped>
  @import "@/assets/css/portfolio.css";
</style>
