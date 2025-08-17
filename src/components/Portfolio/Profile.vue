<script setup lang="ts">
    import type { PropType } from 'vue';
    import type { Preview } from '@/assets/ts/preview';

    defineProps({
        profile: {
            type: Object as PropType<Preview>,
            required: true
        }
    });
</script>

<template>
    <div id="profile" class="h-full">
        <div class="md:w-full w-1/2 self-center">
            <img class="border-default object-contain rounded-full"
                :src="profile.picture.path" :alt="profile.picture.alt" />
        </div>
        <div class="w-full pt-5 pb-5">
            <p id="profile-name">{{ profile.description }}</p>
            <p id="profile-id">{{ profile.title }}</p>
        </div>
        <a href="https://github.com/beingful">
            <button id="follow" class="w-full h-[2rem] button-link border-default">Follow</button>
        </a>
    </div>
</template>