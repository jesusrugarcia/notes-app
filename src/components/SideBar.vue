<template>
  <aside :class="['fixed top-0 left-0 z-40 h-screen transition-all duration-300', collapsed ? 'w-24' : 'w-64', 'bg-gray-50 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 flex flex-col justify-between']">
    <!-- Top Section: Home & Workspaces -->
    <div>
      <div class="flex items-center justify-between px-3 py-4 border-b border-gray-300 dark:border-gray-700">
        <router-link to="/" class="flex items-center">
          <img src="/logo.svg" class="h-8 w-8" alt="PowerNotes Logo" />
          <span v-if="!collapsed" class="ml-3 text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">PowerNotes</span>
        </router-link>
        <button @click="collapsed = !collapsed" class="ml-2 p-1 rounded hover:bg-gray-300 transition-colors">
         <SVGSideBar :image="'M5 7h14M5 12h14M5 17h14'" />
        </button>
      </div>
      <div v-if="!collapsed">
         <ul class="space-y-2 font-medium py-4 px-2">
        <li>
          <RouterLinkSideBar :message="'message.home'" :link="'/home'" :image="'m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5'" :collapsed="collapsed"/>
        </li>
        <li>
          <WorkspacesSide :collapsed="collapsed" />
        </li>
      </ul>
      </div>
      
    </div>
    <!-- Bottom Section: Theme & Language -->
    <div v-if="!collapsed" class="px-2 pb-4 border-t border-gray-300 dark:border-gray-700">
      <ul class="space-y-2 font-medium mt-4">
        <li>
          <ThemeToggle />
        </li>
        <li>
            <LanguageSwitcher />
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import ThemeToggle from './ThemeToggle.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
import WorkspacesSide from './WorkspacesSide.vue';
import RouterLinkSideBar from './RouterLinkSideBar.vue';
import SVGSideBar from './SVGSideBar.vue';
const collapsed = ref(false);
</script>

<style scoped>
/* Sidebar styles for Obsidian-like look */
.aside {
  box-shadow: 2px 0 8px 0 rgba(0,0,0,0.04);
}
li > *:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
