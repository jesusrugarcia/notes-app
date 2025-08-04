<template>
    <div class="flex items-center">
        <a href="/workspaces" class="flex items-center flex-1 p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >
            <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path d="M19.2857 7V5.78571c0-.43393-.3482-.78571-.7778-.78571H6.06345c-.42955 0-.77777.35178-.77777.78571V16m0 0h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1h5m-4-3h4m7.00002-6v3c0 .5523-.4477 1-1 1h-3m8-3v8c0 .5523-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1v-5.397c0-.2536.0963-.4977.2696-.683l2.434-2.603c.189-.2022.4535-.317.7304-.317h3.566c.5523 0 1 .4477 1 1Z"/>
            </svg>
            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{ $t('message.workspaces') }}</span>
        </a>
        
        <button type="button" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>
    </div>
    
    <ul id="dropdown-example" class="hidden py-2 space-y-2">
        <li v-for="workspace in workspaces" :key="workspace.name">
            <button class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{ workspace.name }}
            </button>
        </li>
        <li>
            <button type="button" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                </svg>
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{ $t('message.createWorkspace') }}</span>
            </button>
        </li>
    </ul>

    
</template>

<script setup>
import { ref } from 'vue';

var workspaces = ref([
        {
            name: 'Workspace 1',
            id: 1
        },
        {
            name: 'Workspace 2',
            id: 2
        },
        {
            name: 'Workspace 3',
            id: 3
        }
])
</script>
