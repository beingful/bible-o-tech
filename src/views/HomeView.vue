<script setup lang="ts">
    import PageShortcut from '@/components/Home/Shortcut.vue';
    import { Shortcut } from '@/assets/ts/home/shortcut';
    import { Image } from '@/assets/ts/image';
    import { menu } from '@/assets/json/menu.json';
    
    const shortcuts: Shortcut[] = menu.shortcuts.map(shortcut => {
        return new Shortcut(shortcut.name, shortcut.destination,
            new Image(shortcut.image.fileName));
    });
</script>

<template>
    <nav id="main-menu" class="md:w-3/5 w-2/3 md:py-0 py-10">
        <PageShortcut v-for="(shortcut, index) in shortcuts" :key="index" :shortcut="shortcut" />
    </nav>
</template>

<style lang="css" scoped>
    @import "@/assets/css/home/main-menu.css";
</style>