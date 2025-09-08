<script lang="ts" setup>
    import type { Image } from '@/assets/ts/image';
    import type { PropType } from 'vue';

    defineProps({
        icon: {
            type: Object as PropType<Image>,
            required: false,
            default: null
        },
        withBorder: {
            type: Boolean,
            required: false,
            default: false
        }
    });
</script>

<template>
    <div :class="['paragraph', { 'paragraph-border' : withBorder }]">
        <div v-if="icon != null">
            <img class="min-h-[2rem] min-w-[2rem] h-[2rem] w-[2rem]" :src="icon.path" :alt="icon.alt" />
        </div>
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
    @reference "tailwindcss";

    .paragraph {
        @apply flex flex-row space-x-3;
    }

    .paragraph-border {
        @apply pt-5 border-t-1 border-(--color-muted);
    }
</style>