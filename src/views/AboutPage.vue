<script lang="ts" setup>
    import { ref } from 'vue';

    let showContactInfo = ref(false);
    let canScroll = ref(true);
</script>

<template>
    <div class="flex h-full w-full bg-black" :style="{overflow: canScroll ? 'auto' : 'hodden'}">
        <div class="h-fit relative m-15 grid grid-col grid-cols-4 gap-5 w-full">
            <div class="relative h-full flex flex-col col-span-3 rounded-lg border-1 border-(--color-muted) bg-[#1b1f23]">
                <div class="h-[12rem] rounded-t-lg">
                    <img class="h-full w-full object-cover rounded-t-lg" src="https://iwandm.wordpress.com/wp-content/uploads/2017/04/80909.jpg"></img>
                </div>
                <div class="absolute top-[5rem] left-5 h-[10rem] w-[10rem] border-5 border-[#1b1f23] rounded-full">
                    <img class="h-full w-full object-contain rounded-full" src="https://media.licdn.com/dms/image/v2/D4D03AQFe_BpRcbU5RA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731536264173?e=1758758400&v=beta&t=6oQMyVSgbm5qp0crAUJUGaEO76wQBSkMHSuX94sy8Ys"></img>
                </div>
                <div class="flex flex-col space-y-3 mt-[3.5rem] ml-5 mr-5 mb-5 bg-[#1b1f23]">
                    <div class="flex flex-col space-y-1">
                        <div>
                            <div class="flex flex-row items-center gap-x-2">
                                <p class="text-2xl text-white/90 font-sans font-semibold">Hanna Kasai</p>
                                <img class="object-contain h-[1.25rem]" src="http://localhost:8080/src/assets/images/verified_badge.png" />
                            </div>
                            <p class="text-white/90">Software Engineer</p>
                        </div>
                        <div class="flex flex-row space-x-2 content-center">
                            <p class="text-sm text-white/60">San Francisco, California, United States</p>
                            <button class="link text-sm" @click="() => {showContactInfo = true; canScroll = false;}">Contact info</button>
                        </div>
                        <p class="text-sm text-white/60">[Do not remember how many]+ connections</p>
                    </div>
                    <a href="https://www.linkedin.com/in/hanna-kasai-a89864212">
                        <button id="follow-button" class="flex flex-row space-x-2 w-fit items-center px-4 py-1 rounded-full border-1 border-[#71b7fb]">
                            <svg viewBox="0 0 16 16" width="16" height="16">
                                <path d="M 2, 8 H 14" stroke="#71b7fb" stroke-width="3"/>
                                <path d="M 8, 2 V 14" stroke="#71b7fb" stroke-width="3"/>
                            </svg>
                            <span class="text-[#71b7fb] font-semibold">Follow</span>
                        </button>
                    </a>
                </div>
            </div>
            <div class="h-full sticky top-0 col-span-1 rounded-lg border-1 border-(--color-muted) bg-[#1b1f23]">
                <div class="h-full flex flex-col justify-center items-center space-y-5">
                    <p class="text-4xl text-white/80">Buy premium</p>
                    <p class="text-3xl text-white/70">Buy premium</p>
                    <p class="text-2xl text-white/60">Buy premium</p>
                    <p class="text-xl text-white/50">Buy premium</p>
                    <p class="text-lg text-white/40">Buy premium</p>
                    <p class="text-md text-white/30">Buy premium</p>
                    <p class="text-sm text-white/20">Buy premium</p>
                    <p class="text-xs text-white/10">Buy premium</p>
                </div>
            </div>
            <div class="flex flex-col space-y-3 col-span-3 p-5 rounded-lg border-1 border-(--color-muted) bg-[#1b1f23]">
                <p class="text-xl text-white/90 font-semibold">About</p>
                <p class="text-sm text-white/90">Backend software engineer with slight knowledge in frontend.</p>
            </div>
            <div class="flex flex-col space-y-3 col-span-3 p-5 rounded-lg border-1 border-(--color-muted) bg-[#1b1f23]">
                <p class="text-xl text-white/90 font-semibold">Experience</p>
                <div class="flex flex-row space-x-3 border-b-1 border-(--color-muted) pb-5">
                    <div class="h-[2rem] w-[2rem]">
                        <img class="object-contain" src="https://media.licdn.com/dms/image/v2/D4D0BAQFVjxpDqadGIw/company-logo_200_200/B4DZiY84VRGQAI-/0/1754912753373/itera_asa_logo?e=1759363200&v=beta&t=UMTwduEC0kkTVQfg99kCpM1U9GDxu3IgP-5fFDTHKug"></img>
                    </div>
                    <div class="flex flex-col w-fit">
                        <p class="text-white/90 font-semibold text-lg">Backend Developer</p>
                        <p class="text-sm text-white/90">Itera · Full-time</p>
                        <p class="text-sm text-white/60">Sep 2022 - May 2024 · 1 yr 9 mos</p>
                        <p class="text-sm text-white/60">Kyiv, Ukraine · On-site</p>
                    </div>
                </div>
                <div class="flex flex-row space-x-3 pb-5">
                    <div class="h-[2rem] w-[2rem]">
                        <img class="object-contain" src="https://media.licdn.com/dms/image/v2/D4E0BAQG98U3-k37crQ/company-logo_100_100/company-logo_100_100/0/1736339609948/banzait_logo?e=1758758400&v=beta&t=eshEta0vnDRo2d9uhKmp4H2Aq4_Av0WkOqOh1XvFJcg"></img>
                    </div>
                    <div class="flex flex-col w-fit">
                        <p class="text-white/90 font-semibold text-lg">Fullstack Developer</p>
                        <p class="text-sm text-white/90">Banza · Full-time</p>
                        <p class="text-sm text-white/60">May 2021 - Apr 2022 · 1 yr</p>
                        <p class="text-sm text-white/60">Kyiv, Ukraine · On-site</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-3 col-span-3 p-5 rounded-lg border-1 border-(--color-muted) bg-[#1b1f23]">
                <p class="text-xl text-white/90 font-semibold">Education</p>
                <div class="flex flex-row space-x-3 border-b-1 border-(--color-muted) pb-5">
                    <div class="h-[2rem] w-[2rem]">
                        <img class="object-contain" src="https://media.licdn.com/dms/image/v2/C4D0BAQG0dwdA1TfNhQ/company-logo_100_100/company-logo_100_100/0/1631374969564/taras_shevchenko_national_university_of_kyiv_logo?e=1758758400&v=beta&t=8gWkV1zs8gqbi4Y4awryJ3jyxEgjaD7RLoBsSSOQCpE"></img>
                    </div>
                    <div class="flex flex-col w-fit">
                        <p class="text-white/90 font-semibold text-lg">Taras Shevchenko National University of Kyiv</p>
                        <p class="text-sm text-white/90">Master's degree, Applied Mathematics</p>
                        <p class="text-sm text-white/60">Sep 2022 - Jun 2024</p>
                    </div>
                </div>
                <div class="flex flex-row space-x-3 pb-5">
                    <div class="h-[2rem] w-[2rem]">
                        <img class="object-contain" src="https://media.licdn.com/dms/image/v2/C4D0BAQG0dwdA1TfNhQ/company-logo_100_100/company-logo_100_100/0/1631374969564/taras_shevchenko_national_university_of_kyiv_logo?e=1758758400&v=beta&t=8gWkV1zs8gqbi4Y4awryJ3jyxEgjaD7RLoBsSSOQCpE"></img>
                    </div>
                    <div class="flex flex-col w-fit">
                        <p class="text-white/90 font-semibold text-lg">Taras Shevchenko National University of Kyiv</p>
                        <p class="text-sm text-white/90">Bachelor's degree, Applied Mathematics</p>
                        <p class="text-sm text-white/60">Sep 2018 - Jun 2022</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute flex h-full w-full bg-black/50 justify-center" v-show="showContactInfo">
            <div class="h-full w-1/3 self-center flex flex-col bg-[#1b1f23] border-1 border-(--color-muted) rounded-lg">
                <div class="flex flex-row justify-between border-b-1 p-2 border-(--color-muted)">
                    <p class="text-xl text-white/90 font-semibold">Hanna Kasai</p>
                    <button @click="() => {showContactInfo = false; canScroll = true;}">
                        <div class="h-[2rem] w-[2rem] rounded-full bg-white/90">
                            <img class="object-contain" src="http://localhost:8080/src/assets/images/close-window-icon.png"></img>
                        </div>
                    </button>
                </div>
                <div class="p-2 flex flex-col space-y-3">
                    <p class="text-xl text-white/90">Contact Info</p>
                    <div class="p-2 flex flex-row space-x-3">
                        <div class="h-[2rem] w-[2rem] bg-white/90 rounded-lg">
                            <img src="http://localhost:8080/src/assets/images/phone.png"></img>
                        </div>
                        <div class="flex flex-col space-y-1">
                            <p class="text-white/90 font-semibold">Contact number</p>
                            <p class="text-sm text-white/90">+1(628)-297-5172</p>
                        </div>
                    </div>
                    <div class="p-2 flex flex-row space-x-3">
                        <div class="h-[2rem] w-[2rem] bg-white/90 rounded-lg">
                            <img src="http://localhost:8080/src/assets/images/calendar.png"></img>
                        </div>
                        <div class="flex flex-col space-y-1">
                            <p class="text-white/90 font-semibold">Birthday</p>
                            <p class="text-sm text-white/90">March 26</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    @reference "tailwindcss";
    
    #follow-button:hover {
        @apply ring-1 ring-white/80 bg-[#71b7fb]/20 cursor-pointer;
    }
</style>