<script lang="ts" setup>
    import Section from './Section.vue';

    defineProps({
        bio: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <Section title="About">
        <p class="text-sm text-white/90">{{ bio }}</p>
    </Section>
</template>