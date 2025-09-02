<script lang="ts" setup>
    import Section from './Section.vue';
    import Paragraph from './Paragraph.vue';
    import type { PropType } from 'vue';
    import type { Education } from '@/assets/ts/about/education';

    defineProps({
        educationHistory: {
            type: Object as PropType<Education[]>,
            required: true
        }
    });
</script>

<template>
    <Section title="Education">
        <Paragraph v-for="(education, id) in educationHistory" :icon="education.icon" :withBorder="id > 0" :key="id">
            <div class="flex flex-col w-fit">
                <p class="text-white/90 font-semibold text-lg">{{ education.establishment }}</p>
                <p class="text-sm text-white/90">{{ education.degree }}, {{ education.major }}</p>
                <p class="text-sm text-white/60">{{ education.timeSlot.toString() }}</p>
            </div>
        </Paragraph>
    </Section>
</template>