<script setup lang="ts">
    import { ref, type PropType } from 'vue';
    import { RouterLink } from 'vue-router';
    import { Shortcut } from '@/assets/ts/home/shortcut';

    defineProps({
        shortcut: {
            type: Object as PropType<Shortcut>,
            required: true
        }
    });

    let shortcutNameVisible = ref(false);

    const changeShortcutNameVisibility = (value: boolean) => {
        shortcutNameVisible.value = value;
    }
</script>

<template>
    <div class="shortcut min-w-[150px]">
        <RouterLink :to="shortcut.destination">
            <button class="accent-large rounded-full"
                @mouseover="changeShortcutNameVisibility(true)"
                @mouseleave="changeShortcutNameVisibility(false)">
                <img class="object-cover rounded-full" :src="shortcut.image.path" :alt="shortcut.image.alt">
            </button>
        </RouterLink>
        <p :class="['shortcut-name', shortcutNameVisible ? 'opacity-100' : 'xl:opacity-0']">
            {{ shortcut.name }}
        </p>
    </div>
</template>

<style lang="css">
    @import "@/assets/css/home/shortcut.css";
</style>