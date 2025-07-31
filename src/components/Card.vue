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
        <h3 class="card-title">
            {{ infoCard.title }}
        </h3>
        <p class="card-text">
            {{ infoCard.text }}
        </p>
    </div>
</template>