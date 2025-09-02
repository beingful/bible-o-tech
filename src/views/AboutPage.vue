<script lang="ts" setup>
    import { LinkedInAccount } from '@/assets/ts/about/linkedInAccount';
    import { Settings } from '@/assets/ts/about/settings';
    import Profile from '@/components/About/Profile.vue';
    import Bio from '@/components/About/Bio.vue';
    import ContactInfo from '@/components/About/ContactInfo.vue';
    import Education from '@/components/About/Education.vue';
    import Experience from '@/components/About/Experience.vue';
    import Skills from '@/components/About/Skills.vue';
    import Promotion from '@/components/About/Promotion.vue';
    import { ref } from 'vue';

    const settings = new Settings();
    const account = new LinkedInAccount();

    let showContactInfo = ref(false);
    let canScroll = ref(true);

    const onOpenContactInfoClicked = () => {
        showContactInfo.value = true;
        canScroll.value = false;
    }

    const onCloseContactInfoClicked = () => {
        showContactInfo.value = false;
        canScroll.value = true;
    }
</script>

<template>
    <div class="flex h-full w-full justify-center bg-black" :style="{overflow: canScroll ? 'auto' : 'hidden'}">
        <div class="h-fit relative my-5 grid grid-col md:grid-cols-4 gap-x-5 lg:w-5xl md:w-3xl w-xl">
            <div class="flex flex-col space-y-2 md:col-span-3">
                <div class="relative h-full flex flex-col rounded-lg border-1 border-(--color-muted) bg-[#1b1f23]">
                    <div class="h-[12rem] rounded-t-lg">
                        <img class="h-full w-full object-cover rounded-t-lg" :src="account.website.wallpaper.path" :alt="account.website.wallpaper.alt"></img>
                    </div>
                    <Profile
                        :candidacy="account.candidacy"
                        :location="account.location"
                        :visit="account.website.url"
                        :verification-badge="settings.verificationBadge"
                        @open-contact-info-clicked="onOpenContactInfoClicked" />
                </div>
                <Bio :bio="account.candidacy.bio"/>
                <Experience :experience-history="account.experience" />
                <Education :education-history="account.education"/>
                <Skills :skills="account.skills"/>
            </div>
            <Promotion class="md:inline hidden col-span-1 top-5" />
        </div>
        <div class="absolute flex h-full w-full bg-black/50 justify-center" v-show="showContactInfo">
            <ContactInfo
                :contact="account.candidacy.name"
                :contact-methods="account.contactMethods"
                :close-button-icon="settings.closeButtonIcon"
                @close-contact-info-clicked="onCloseContactInfoClicked" />
        </div>
    </div>
</template>

<style lang="css" scoped>
    @reference "tailwindcss";
    
    #follow-button:hover {
        @apply ring-1 ring-white/80 bg-[#71b7fb]/20 cursor-pointer;
    }
</style>