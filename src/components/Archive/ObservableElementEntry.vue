<script setup lang="ts">
    import type { IObservableEntry } from '@/assets/ts/archive/observation/iObservableEntry';
    import { ref, type PropType } from 'vue';

    const props = defineProps({
        observableEntry: {
            type: Object as PropType<IObservableEntry>,
            required: true
        }
    });

    const entryReactive = ref(props.observableEntry);
</script>

<template>
    <div :id="observableEntry.id" className="full-size observable-entry-container">
        <Transition :name="entryReactive.transition.name">
            <div className="full-size transition-entry-container" v-show="entryReactive.active">
                <slot></slot>
            </div>
        </Transition>
    </div>
</template>