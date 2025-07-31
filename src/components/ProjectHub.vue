<script setup lang="ts">
    import { ProjectsCarousel } from '@/assets/ts/carousels/projectsCarousel';
    import ObservableCarousel from './ObservableCarousel.vue';

    const projectCarousel: ProjectsCarousel = new ProjectsCarousel();
</script>

<template>
    <ObservableCarousel :carousel="projectCarousel" />
</template>

<style lang="css" scoped>
    @import "@/assets/css/projectHubCarousel.css";
    @import "@/assets/css/projectCard.css"
</style>