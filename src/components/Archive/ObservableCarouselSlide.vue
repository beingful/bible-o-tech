<script setup lang="ts">
    import { ref, type PropType } from 'vue';
    import type { ObservableCarouselSlide } from '@/assets/ts/archive/carousels/observableCarouselSlide';
    import ObservableElementEntry from '../Archive/ObservableElementEntry.vue';
    import Card from '../Archive/Card.vue';

    const props = defineProps({
        carouselSlide: {
            type: Object as PropType<ObservableCarouselSlide>,
            required: true
        }
    });

    const slide = ref(props.carouselSlide);
</script>

<template>
    <ObservableElementEntry :observableEntry="carouselSlide">
        <div className="carousel-slide">
            <Card :infoCard = "carouselSlide.content"></Card>
        </div>
    </ObservableElementEntry>
</template>