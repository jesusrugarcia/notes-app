<template>
<aside class="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800">
   <div class="h-full px-3 py-4 overflow-y-auto">
    <a href="/" class="flex items-center ps-2.5 mb-5">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">PowerNotes</span>
    </a>
    <ThemeToggle />
      <ul class="space-y-2 font-medium">
         <li>
            <a href="/home" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                </svg>
               <span class="ml-3">Home</span>
            </a>
         </li>
         <li>
            <WorkspacesSide />
         </li>
      </ul>
   </div>
</aside>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue';
import WorkspacesSide from './WorkspacesSide.vue';
</script>
