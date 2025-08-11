<script setup lang="ts">
    import { projects } from '../assets/files/json/projects.json';
    import { InfoCard } from '@/assets/ts/infoCard';
    import { Image } from "@/assets/ts/image"

    const projectCards: InfoCard[] = new Array<InfoCard>(projects.length);

    projects.forEach((project, index)  => {
        const gallery: Image[] = new Array<Image>(project.images.length);

        project.images.forEach((imagePath, index) => {
            gallery[index] = new Image(imagePath)
        });

        projectCards[index] = new InfoCard(project.title, project.text, gallery);
    });

    const daysInYear = new Int8Array(371);

    for (let i: number = 0; i < 371; i++) {
        daysInYear[i] = i + 1;
    }
</script>

<template>
    <div class="grid grid-cols-4 bg-[#0d1117] md:gap-x-5 gap-y-5 overflow-auto max-w-[1280px] min-w-[300px]" :style="{ backgroundAttachment: 'local' }">
        <div class="flex flex-col h-full md:col-span-1 col-span-4 md:row-span-2 row-span-1">
            <div class="flex items-stretch md:w-full w-1/2 self-center">
                <img class="border border-2 border-[#3d444d] object-contain rounded-full" src="http://localhost:8080/src/assets/images/projects/unity-publisher-tool/profile-image-squared.png"></img>
            </div>
            <div class="w-full p-5">
                <p class="font-sans font-semibold text-2xl text-white">Hanna Kasai</p>
                <p class="font-mono font-light text-base text-[#9198a1]">beingful</p>
            </div>
            <a href="https://github.com/beingful">
                <button id="link" class="w-full h-[2rem] bg-[#212830] border border-1 border-[#3d444d] rounded-sm text-white text-sm font-semibold">Follow</button>
            </a>
        </div>
        <div class="w-full h-full grid grid-cols-2 grid-rows-2 md:col-span-3 col-span-4 text-white/50">
            <div class="relative p-5 sm:col-span-1 col-span-3" v-for="(projectCard, index) in projectCards" :key="index">
                <div class="absolute h-[3rem] top-0 left-0">
                    <img class="h-full object-contain rounded-full" :src="projectCard.gallery![0].path" :alt="projectCard.gallery![0].alt" />
                </div>
                <div class="h-full flex flex-col space-y-3 border border-1 border-[#3d444d] rounded-lg p-5">
                    <div class="flex flex-row flex-shrink">
                        <p class="card-title content-center link"> {{ projectCard.title }} </p>
                    </div>
                    <div class="card-text custom-scroll overflow-hidden">
                        <p class="mr-1">{{ projectCard.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="ml-5 mr-5 p-5 h-max md:col-span-3 col-span-4 border border-1 border-[#3d444d] rounded-t-lg">
            <div class="h-max w-full overflow-hidden custom-scroll">
                <div class="grid grid-cols-55 grid-rows-9 h-[8.5rem] w-max min-w-full">
                    <div class="grid grid-rows-3 row-span-7 row-start-3 col-span-2 text-white text-xs">
                        <p class="self-center">Mon</p>
                        <p class="self-center">Wed</p>
                        <p class="self-center">Fri</p>
                    </div>
                    <div class="grid grid-cols-12 row-span-2 col-span-53 col-start-3 text-white text-xs">
                        <p class="self-center text-center">Jan</p>
                        <p class="self-center text-center">Feb</p>
                        <p class="self-center text-center">Mar</p>
                        <p class="self-center text-center">Apr</p>
                        <p class="self-center text-center">May</p>
                        <p class="self-center text-center">Jun</p>
                        <p class="self-center text-center">Jul</p>
                        <p class="self-center text-center">Aug</p>
                        <p class="self-center text-center">Sep</p>
                        <p class="self-center text-center">Oct</p>
                        <p class="self-center text-center">Nov</p>
                        <p class="self-center text-center">Dec</p>
                    </div>
                    <div class="grid grid-cols-53 grid-rows-7 gap-x-1 gap-y-1 col-span-53 row-span-7 row-start-3 col-start-3 grid-flow-col">
                        <div :class="[ day % 2 == 0 ? 'bg-[#033a16]' : 'bg-[#151b23]', 'rounded-xs']" v-for="(day) in daysInYear" :key="day" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    @import "@/assets/css/projectCard.css";

    .custom-scroll {
        scrollbar-gutter: stable;
    }
    
    .custom-scroll::-webkit-scrollbar {
        @apply w-1 h-1;
    }

    .custom-scroll::-webkit-scrollbar-track {
        @apply bg-transparent;
    }

    .custom-scroll::-webkit-scrollbar-thumb {
        @apply bg-gray-300/20;
    }

    .custom-scroll:hover {
        @apply overflow-auto;
    }

    #link:hover {
        @apply cursor-pointer bg-[#2a313c];
    }
</style>