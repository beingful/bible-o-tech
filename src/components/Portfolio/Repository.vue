<script setup lang="ts">
    import type { PropType } from 'vue';
    import type { Repository } from '@/assets/ts/portfolio/repository';

    defineProps({
        repository: {
            type: Object as PropType<Repository>,
            required: true
        },
        languageBackground: {
            type: Object as PropType<Record<string, string>>,
            required: true
        }
    });
</script>

<template>
    <div class="relative p-5 repository">
        <div class="absolute h-[3rem] top-0 left-0">
            <img class="h-full border-default rounded-full" :src="repository.preview.picture.path" :alt="repository.preview.picture.alt" />
        </div>
        <div class="h-full p-5 flex flex-col rounded-lg justify-between space-y-3 border-default">
            <div class="flex flex-col space-y-3">
                <div class="flex space-x-2">
                    <a class="link" :href="repository.gitHubLink"> {{ repository.preview.title }} </a>
                    <p class="pr-1.5 pl-1.5 self-center public-lable border-default">Public</p>
                </div>
                <p class="mr-1 repository-description">{{ repository.preview.description }}</p>
            </div>
            <div class="h-[0.75rem] repository-summary">
                <div class="h-full w-[0.75rem] rounded-full bg-white"
                    :style="{backgroundColor: `var(${languageBackground[repository.language]})`}" />
                <p class="self-center">
                    {{ repository.language }}
                </p>
            </div>
        </div>
    </div>
</template>