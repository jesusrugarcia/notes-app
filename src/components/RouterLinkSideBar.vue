<template>
    <router-link :to=link
    class="flex items-center w-full p-2  rounded-lg group 
    hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >

        <SVGSideBar :image=image />
        
        <span class="ml-3">{{ $t(message) }}</span>

    </router-link>
</template>

<script setup>
import { defineProps } from 'vue';
import SVGSideBar from './SVGSideBar.vue';

const props = defineProps({
    link : {
        type: String
    },
    message : {
        type : String
    },
    image : {
        type : String
    }
})
</script>