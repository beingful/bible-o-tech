<script lang="ts" setup>
    import Follow from './Follow.vue';
    import type { PropType } from 'vue';
    import type { Image } from '@/assets/ts/image';
    import type { Candidacy } from '@/assets/ts/about/candidacy';
    import type { Location } from '@/assets/ts/about/location';

    defineProps({
        candidacy: {
            type: Object as PropType<Candidacy>,
            required: true
        },
        location: {
            type: Object as PropType<Location>,
            required: true
        },
        visit: {
            type: String,
            required: true
        },
        verificationBadge: {
            type: Object as PropType<Image>,
            required: true
        }
    });
</script>

<template>
    <div class="absolute top-[5rem] left-5 h-[10rem] w-[10rem] border-5 border-[#1b1f23] rounded-full">
        <img class="h-full w-full object-contain rounded-full" :src="candidacy.picture.path" :alt="candidacy.picture.alt" />
    </div>
    <div class="flex flex-col space-y-3 mt-[3.5rem] ml-5 mr-5 mb-5 bg-[#1b1f23]">
        <div class="flex flex-col space-y-1">
            <div>
                <div class="flex flex-row items-center gap-x-2">
                    <p class="text-2xl text-white/90 font-sans font-semibold">{{ candidacy.name }}</p>
                    <img class="object-contain h-[1.25rem]" :src="verificationBadge.path" :alt="verificationBadge.alt" />
                </div>
                <p class="text-white/90"> {{ candidacy.title }}</p>
            </div>
            <div class="flex flex-row space-x-2 content-center">
                <p class="text-sm text-white/60">{{ location.city }}, {{ location.state }}, {{ location.country }}</p>
                <button class="link text-sm" @click="$emit('openContactInfoClicked')">Contact info</button>
            </div>
        </div>
        <a :href="visit">
            <Follow/>
        </a>
    </div>
</template>