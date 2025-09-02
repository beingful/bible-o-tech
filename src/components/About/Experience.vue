<script lang="ts" setup>
    import Section from './Section.vue';
    import Paragraph from './Paragraph.vue';
    import type { PropType } from 'vue';
    import type { Experience } from '@/assets/ts/about/experience';

    defineProps({
        experienceHistory: {
            type: Object as PropType<Experience[]>,
            required: true
        }
    });
</script>

<template>
    <Section title="Experience">
        <Paragraph v-for="(experience, id) in experienceHistory" :icon="experience.icon" :withBorder="id > 0" :key="id">
            <div class="flex flex-col space-y-2">
                <div class="flex flex-col">
                    <p class="text-lg text-white/90 font-semibold">{{ experience.position }}</p>
                    <p class="text-sm text-white/90">{{ experience.company }}, {{ experience.employmentType }}</p>
                    <p class="text-sm text-white/60">{{ experience.timeSlot.toString() }}</p>
                </div>
                <div class="flex flex-col">
                    <p class="text-sm text-white/90" v-for="responsibility in experience.responsibilities">
                        - {{ responsibility }}
                    </p>
                </div>
            </div>
        </Paragraph>
    </Section>
</template>