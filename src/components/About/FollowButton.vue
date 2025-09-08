<script lang="ts" setup>
defineProps({
        url: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: true
        },
        showSvg: {
            type: Boolean,
            required: false,
            default: false
        }
    });
</script>

<template>
    <a :href="url">
        <button class="flex flex-row space-x-2 follow-button button-link w-fit items-center px-4 py-1 rounded-full border-1 border-[#71b7fb]">
            <svg viewBox="0 0 16 16" width="16" height="16" v-show="showSvg">
                <path d="M 2, 8 H 14" stroke="#71b7fb" stroke-width="3"/>
                <path d="M 8, 2 V 14" stroke="#71b7fb" stroke-width="3"/>
            </svg>
            <span class="text-[#71b7fb] font-semibold">{{ caption }}</span>
        </button>
    </a>
</template>

<style lang="css" scoped>
    @reference "tailwindcss";

    .follow-button:hover {
        @apply ring-1 ring-white/80 bg-[#71b7fb]/20 cursor-pointer;
    }
</style>