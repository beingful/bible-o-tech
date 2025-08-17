<script setup lang="ts">
    import { type PropType } from 'vue';
    import { Shortcut } from '@/assets/ts/home/shortcut';
    import { RouterLink } from 'vue-router';
    import router from '@/router';

    defineProps({
        shortcut: {
            type: Object as PropType<Shortcut>,
            required: true
        }
    });
</script>

<template>
    <div class="shortcut min-w-[200px]">
        <RouterLink :to="shortcut.destination">
            <button class="shortcut-button shortcut-transition" @click="router.push('/portfolio')">
                <img class="shortcut-image" :src="shortcut.image.path" :alt="shortcut.image.alt">
            </button>
        </RouterLink>
        <p class="shortcut-name shortcut-transition"> {{ shortcut.name }} </p>
    </div>
</template>

<style lang="css">
    @import "@/assets/css/home/shortcut.css";
</style>