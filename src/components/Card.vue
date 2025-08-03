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
    <div class="card-container">
        <p class="card-title"> {{ infoCard.title }} </p>
        <div class="card-text"> {{ infoCard.text }} </div>
    </div>
</template>