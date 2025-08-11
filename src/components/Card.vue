<script setup lang="ts">
    import { type PropType } from 'vue';
    import type { InfoCard } from '@/assets/ts/infoCard';

    defineProps({
        infoCard: {
            type: Object as PropType<InfoCard>,
            required: true
        }
    });
</script>

<template>
    <div class="h-full w-full flex flex-col flex-shrink items-center p-5 space-y-5">
        <div class="flex flex-row flex-shrink h-[3rem] space-x-5">
            <img class="h-full object-contain rounded-full" :src="infoCard.gallery![0].path" :alt="infoCard.gallery![0].alt">
            <p class="card-title content-center"> {{ infoCard.title }} </p>
        </div>
        <div class="card-text"> {{ infoCard.text }} </div>
    </div>
</template>