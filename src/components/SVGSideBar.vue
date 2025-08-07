<template>
    <svg 
    class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 
    group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    fill="none" viewBox="0 0 24 24" >

        <path 
        stroke="currentColor" stroke-linecap="round" 
        stroke-linejoin="round" stroke-width="2" 
        :d=image
        />

    </svg>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    image : {
        type : String
    }
})
</script>