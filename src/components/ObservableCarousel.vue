<script setup lang="ts">
    import { type PropType, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
    import type { ObservableCarousel } from '@/assets/ts/carousels/observableCarousel';
    import { ElementObserver } from '@/assets/ts/observation/elementObserver';
    import ObservableCarouselSlide from './ObservableCarouselSlide.vue';

    const props = defineProps({
        carousel: {
            type: Object as PropType<ObservableCarousel>,
            required: true
        }
    });

    let observer: ElementObserver;

    const carouselElement = useTemplateRef<Element>(props.carousel.id);
    const carouselReactive = ref(props.carousel);

    onMounted(() => {
        observer = new ElementObserver(carouselReactive.value, {
            threshold: 0.9
        });

        observer.startObserving(carouselElement.value!);
    });

    onUnmounted(() => {
        observer.stopObserving();
    });
</script>

<template>
    <div :ref="carousel.id" class="full-size carousel">
        <ObservableCarouselSlide v-for="(observableEntry) in carousel.entries" :key="observableEntry.id" :carouselSlide="observableEntry" />
    </div>
</template>