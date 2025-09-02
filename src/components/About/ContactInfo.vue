<script lang="ts" setup>
    import Section from './Section.vue';
    import Paragraph from './Paragraph.vue';
    import type { PropType } from 'vue';
    import type { Image } from '@/assets/ts/image';
    import type { ContactMethod } from '@/assets/ts/about/contactMethod';

    defineProps({
        contact: {
            type: String,
            required: true
        },
        contactMethods: {
            type: Object as PropType<ContactMethod[]>,
            required: true
        },
        closeButtonIcon: {
            type: Object as PropType<Image>,
            required: true
        }
    });
</script>

<template>
    <div class="m-5 min-h-fit h-1/2 min-w-fit max-w-lg w-full sm:w-3/5 md:w-1/2 lg:x-1/3 self-center flex flex-col bg-[#1b1f23] border-1 border-(--color-muted) rounded-lg self-start">
        <div class="flex flex-row justify-between border-b-1 p-5 border-(--color-muted)">
            <p class="text-xl text-white/90 font-semibold">{{ contact }}</p>
            <button @click="$emit('closeContactInfoClicked')">
                <div class="h-[2rem] w-[2rem] rounded-full bg-white/90">
                    <img class="object-contain" :src="closeButtonIcon.path" :alt="closeButtonIcon.alt"></img>
                </div>
            </button>
        </div>
        <Section title="Contact Info" :withBorder="false">
            <Paragraph v-for="contactMethod in contactMethods" :icon="contactMethod.icon" :withBorder="false">
                <div class="flex flex-col space-y-1">
                    <p class="text-white/90 font-semibold">{{ contactMethod.name }}</p>
                    <p class="text-sm text-white/90">{{ contactMethod.detail }}</p>
                </div>
            </Paragraph>
        </Section>
    </div>
</template>