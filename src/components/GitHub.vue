<script setup lang="ts">
    import { GitHubAccount } from '@/assets/ts/git-hub/gitHubAccount';

    const account = new GitHubAccount();

    const contributionIntencity = ['#151b23', '#033a16', '#196c2e', '#2ea043', '#56d364'];
</script>

<template>
    <div class="grid grid-cols-4 bg-[#0d1117] md:gap-x-5 gap-y-5 overflow-auto max-w-[1280px] min-w-[300px]" :style="{ backgroundAttachment: 'local' }">
        <div class="flex flex-col h-full md:col-span-1 col-span-4">
            <div class="flex items-stretch md:w-full w-1/2 self-center">
                <img class="border border-2 border-[#3d444d] object-contain rounded-full" :src="account.profile.picture.path" :alt="account.profile.picture.alt" />
            </div>
            <div class="w-full p-5">
                <p class="font-sans font-semibold text-2xl text-white">{{ account.profile.description }}</p>
                <p class="font-mono font-light text-base text-[#9198a1]">{{ account.profile.title }}</p>
            </div>
            <a href="https://github.com/beingful">
                <button id="link" class="w-full h-[2rem] bg-[#212830] border border-1 border-[#3d444d] rounded-sm text-white text-sm font-semibold">Follow</button>
            </a>
        </div>
        <div class="w-full h-full grid grid-cols-2 grid-rows-2 md:col-span-3 col-span-4 text-white/50">
            <div class="relative p-5 sm:col-span-1 col-span-3" v-for="(repository, index) in account.repositories" :key="index">
                <div class="absolute h-[3rem] top-0 left-0">
                    <img class="h-full object-contain rounded-full" :src="repository.preview.picture.path" :alt="repository.preview.picture.alt" />
                </div>
                <div class="h-full flex flex-col space-y-3 border border-1 border-[#3d444d] rounded-lg p-5">
                    <p class="card-title content-center link"> {{ repository.preview.title }} </p>
                    <p class="mr-1">{{ repository.preview.description }}</p>
                    <!--<div class="flex flex-row flex-shrink">
                        <p class="card-title content-center link"> {{ repository.preview.title }} </p>
                    </div>
                    <div class="card-text custom-scroll overflow-hidden">
                        
                    </div>-->
                </div>
            </div>
        </div>
        <div class="flex flex-col space-y-2 ml-5 mr-5 h-max md:col-span-3 md:col-start-2 col-span-4">
            <h4 class="text-white font-normal">
                {{ account.contributionCalendar.productivity }}
                <span class="text-red-700">fake</span>
                contributions in the last year
            </h4>
            <div class="p-5 border border-1 border-[#3d444d] rounded-t-lg">
                <div class="h-max w-full overflow-hidden custom-scroll">
                    <div class="grid grid-cols-55 grid-rows-9 h-[135px] w-[830px] min-w-full">
                        <div class="grid grid-rows-3 row-span-7 row-start-3 col-span-2 text-white text-xs">
                            <p class="self-center" v-for="dayOfWeek in account.contributionCalendar.daysOfWeek" :key="dayOfWeek">{{ dayOfWeek }}</p>
                        </div>
                        <div class="grid grid-cols-12 row-span-2 col-span-53 col-start-3 text-white text-xs">
                            <p class="self-center text-center" v-for="month in account.contributionCalendar.months" :key="month">{{ month }}</p>
                        </div>
                        <div class="grid grid-cols-53 grid-rows-7 gap-x-1 gap-y-1 col-span-53 row-span-7 row-start-3 col-start-3 grid-flow-col">
                            <div class="rounded-xs" :style="{ backgroundColor: contributionIntencity[contribution] }" v-for="(contribution, index) in account.contributionCalendar.contributions" :key="index" />
                        </div>
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