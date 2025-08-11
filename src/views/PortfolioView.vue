<script setup lang="ts">
  import GitHub from '@/components/GitHub.vue';
  import ProjectHub from '@/components/ProjectHub.vue';
</script>

<template>
  <!--
  <div class="project-gallery grid grid-cols-4" :style="{ backgroundAttachment: 'local' }">
    <div class="h-full m-5 col-span-1 border border-1 border-white rounded-lg">
        <img class="p-2 object-contain rounded-full" src="http://localhost:8080/src/assets/images/projects/unity-publisher-tool/profile-image-squared.png"></img>
    </div>
    <div class="flex flex-col items-center justify-center col-span-3">
      <ProjectHub class="full-size"></ProjectHub>
    </div>
  </div>
  -->
  <GitHub class="p-5"/>
</template>

<style lang="css" scoped>
  @import "@/assets/css/portfolio.css";
</style>
