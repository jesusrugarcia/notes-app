<script setup>
import { ref, computed } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

var document = ref({
    name : 'Name',
    description : 'dummy document',
    id : 'test',
    components : [
        {
            id : 'test',
            type : 'markdown',
            content : '*GYATT*'
        },
        {
            id : 'test2',
            type : 'markdown',
            content : 'RIZZLER'
        },
    ]
})

onMounted(() => {
    const route = useRoute()
    const currentRoute = computed (() => route.params.id)
    document.value.name = currentRoute
  })

</script>

<template>
    <!-- Header Section -->
    <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50">
        <div class="max-w-7xl mx-auto px-8 py-6">
            <div class="items-center justify-between">
                <div class="">
                    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{{ document.name }}</h1>
                    <p class="text-sm text-gray-600 dark:text-gray-400 font-medium">{{ document.description }}</p>
                </div>
            </div>
        </div>
    </div>

    <!--Content Section-->
    <div v-for="component in document.components">
        {{ component.content }}
    </div>
    
</template>