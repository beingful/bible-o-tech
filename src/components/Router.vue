<script setup lang="ts">
    import PageShortcut from './Shortcut.vue';
    import { Shortcut } from '@/assets/ts/shortcut';
    import { Image } from '@/assets/ts/image';
    
    const shortcuts: Shortcut[] = [
        new Shortcut('Owner', '/owner', new Image('owner-cropped.jpg', 'owner.jpg')),
        new Shortcut('Portfolio', '/portfolio', new Image('almost-github-logo.jpg', 'portfolio.jpg')),
        new Shortcut('Shared knowledge', '/library', new Image('digital-library-cropped.png', 'shared-knowledge.jpg'))
    ];
</script>

<template>
    <nav id="router">
        <PageShortcut v-for="(shortcut, index) in shortcuts" :key="index" :shortcut="shortcut" />
    </nav>
</template>

<style lang="css">
    @import "@/assets/css/router.css";
</style>