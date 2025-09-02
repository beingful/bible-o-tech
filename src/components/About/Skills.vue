<script lang="ts" setup>
    import Section from './Section.vue';
    import Paragraph from './Paragraph.vue';
    import type { PropType } from 'vue';
    import type { Skill } from '@/assets/ts/about/skill';

    defineProps({
        skills: {
            type: Object as PropType<Skill[]>,
            required: true
        }
    });
</script>

<template>
    <Section title="Skills">
        <Paragraph v-for="(skill, id) in skills" :withBorder="id > 0" :key="id">
            <div class="flex flex-col w-fit space-y-2">
                <p class="text-white/90 font-semibold text-lg">{{ skill.category }}</p>
                <p class="text-sm text-white/90">{{ skill.technologies.join(' · ') }}</p>
            </div>
        </Paragraph>
    </Section>
</template>