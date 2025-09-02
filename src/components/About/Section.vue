<script lang="ts" setup>
    defineProps({
        title: {
            type: String,
            required: true
        },
        withBorder: {
            type: Boolean,
            required: false,
            default: true
        }
    });
</script>

<template>
    <div :class="['section', { 'section-border' : withBorder }]">
        <p class="text-xl text-white/90 font-semibold">{{ title }}</p>
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
    @reference "tailwindcss";

    .section {
        @apply flex flex-col space-y-3 p-5 bg-[#1b1f23];
    }

    .section-border {
        @apply rounded-lg border-1 border-(--color-muted);
    }
</style>