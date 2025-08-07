<script setup>
import SideBar from './components/SideBar.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { RouterView } from 'vue-router'
import RightSideBar from '@/components/RightSideBar.vue'
import TabBar from '@/components/TabBar.vue';
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <div class="flex h-screen bg-white dark:bg-gray-900">
    <!-- Left Sidebar -->
    <SideBar />
    
    <!-- Main Content Area -->
    <main class="flex-1 ml-64 overflow-y-auto">
      <TabBar />
      <RouterView/>
    </main>
    
    <!-- Right Sidebar -->
     <RightSideBar/>
  </div>
</template>

<style scoped>

</style>
