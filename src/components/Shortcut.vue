<script setup lang="ts">
    import { type PropType } from 'vue';
    import { Shortcut } from '@/assets/ts/shortcut';
    import { RouterLink } from 'vue-router';
    import router from '@/router';

    defineProps({
        shortcut: {
            type: Object as PropType<Shortcut>,
            required: true
        }
    });
</script>

<template>
    <div id="shortcut">
        <RouterLink :to="shortcut.destination">
            <button class="shortcut-button shortcut-transition" @click="router.push('/portfolio')">
                <img class="object-cover rounded-full" :src="shortcut.image.path" :alt="shortcut.image.alt">
            </button>
        </RouterLink>
        <p class="shortcut-text shortcut-transition">
            {{ shortcut.description }}
        </p>
    </div>
</template>