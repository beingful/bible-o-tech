<script setup lang="ts">
    import MainMenuOption from './MainMenuOption.vue';
    import { MenuOption } from '@/assets/ts/menuOption';
    import { ImageElement } from '@/assets/ts/imageElement';
    
    const menuOptions: MenuOption[] = [
        new MenuOption('Owner', new ImageElement('owner.jpg', 'owner.jpg')),
        new MenuOption('Portfolio', new ImageElement('almost-github-logo.jpg', 'portfolio.jpg')),
        new MenuOption('Shared knowledge', new ImageElement('digital-library-square.png', 'shared-knowledge.jpg'))
    ];
</script>

<template>
    <nav class="main-menu">
        <MainMenuOption v-for="(menuOption, index) in menuOptions" :key="index" :option="menuOption" />
    </nav>
</template>

<style lang="css">
    @reference "@/assets/css/mainMenu.css";
</style>