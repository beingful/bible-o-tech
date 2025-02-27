<script setup lang="ts">
    import { type PropType } from 'vue';
    import { MenuOption } from '@/assets/ts/menuOption';

    defineProps({
        option: {
            type: Object as PropType<MenuOption>,
            required: true
        }
    });
</script>

<template>
    <div class="main-menu-option-container">
        <button type="button" class="main-menu-option-button main-menu-option-transition">
            <img class="rounded-full" :src="option.image.path" :alt="option.image.alt">
        </button>
        <p class="main-menu-option-text main-menu-option-transition">
            {{ option.description }}
        </p>
    </div>
</template>