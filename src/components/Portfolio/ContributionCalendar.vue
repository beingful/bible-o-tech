<script setup lang="ts">
    import type { PropType } from 'vue';
    import type { ContributionCalendar } from '@/assets/ts/portfolio/contributionCalendar';

    defineProps({
        contributionCalendar: {
            type: Object as PropType<ContributionCalendar>,
            required: true
        },
        contributionBackground: {
            type: Object as PropType<string[]>,
            required: true
        }
    });
</script>

<template>
    <div id="contributions" class="h-max ml-5 mr-5">
        <h4 class="text-white">
            {{ contributionCalendar.productivity }} 
            <span class="text-red-700">fake</span> 
            contributions in the last year
        </h4>
        <div class="p-5 border-default rounded-t-lg">
            <div class="overflow-auto">
                <div id="contribution-calendar" class="h-[135px] w-[830px] min-w-full">
                    <div id="contribution-months">
                        <p class="self-center" v-for="dayOfWeek in contributionCalendar.daysOfWeek" :key="dayOfWeek">{{ dayOfWeek }}</p>
                    </div>
                    <div id="contribution-days-of-week">
                        <p class="self-center text-center" v-for="month in contributionCalendar.months" :key="month">{{ month }}</p>
                    </div>
                    <div id="activity">
                        <div class="rounded-xs" :style="{backgroundColor: `var(${contributionBackground[contribution]})`}"
                            v-for="(contribution, index) in contributionCalendar.contributions" :key="index" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>