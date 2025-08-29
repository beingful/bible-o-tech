<script setup lang="ts">
    import { GitHubAccount } from '@/assets/ts/portfolio/gitHubAccount';
    import Repository from '@/components/Portfolio/Repository.vue';
    import Profile from '@/components/Portfolio/Profile.vue';
    import ContributionCalendar from '@/components/Portfolio/ContributionCalendar.vue';

    const account = new GitHubAccount();

    const contributionBackground = Array<string>(5);

    for (let i = 0; i < contributionBackground.length; i++) {
      contributionBackground[i] = `--contribution-color-level-${i}`;
    }

    const languageBackground: { [id: string] : string; } = {
      'C#': '--language-color-c-sharp',
      'Dart': '--language-color-dart'
    };
</script>

<template>
    <div id="portfolio" class="p-5 max-w-[1280px] min-w-[300px]">
        <Profile :profile="account.profile" />
        <div id="repositories">
            <Repository :language-background="languageBackground"
              v-for="(repository, index) in account.repositories"
              :key="index" :repository="repository" />
        </div>
        <ContributionCalendar
          :contribution-calendar="account.contributionCalendar"
          :contribution-background="contributionBackground" />
    </div>
</template>

<style lang="css" scoped>
    @import "@/assets/css/portfolio/gitHub.css";
</style>