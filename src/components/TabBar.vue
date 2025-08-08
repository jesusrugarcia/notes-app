<template>
    

<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    
    <li v-for="tab in tabs" :key="tab" class="me-2">
        <router-link :to=tab.link aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">{{ tab.title }}</router-link>
    </li>
    
</ul>


</template>

<script setup>
import { ref } from 'vue'; 

var tabs = ref([
    {
        title : 'DummyDocument',
        link : '/document/DummyDocument'
    },
    {
        title : 'Home',
        link : '/home'
    }
])
</script>