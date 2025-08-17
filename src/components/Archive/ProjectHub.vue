<script setup lang="ts">
    import { ProjectsCarousel } from '@/assets/ts/archive/carousels/projectsCarousel';
    import ObservableCarousel from './ObservableCarousel.vue';

    const projectCarousel: ProjectsCarousel = new ProjectsCarousel();
</script>

<template>
    <ObservableCarousel class="col-span-3" :carousel="projectCarousel" />
</template>

<style lang="css" scoped>
    @import "@/assets/css/projectHubCarousel.css";
    @import "@/assets/css/projectCard.css";
</style>