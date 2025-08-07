<template>
  <aside class="w-80 h-screen bg-gray-900 dark:bg-gray-950 border-l border-gray-800 dark:border-gray-700 flex flex-col overflow-y-auto">
    <div class="p-4 flex-1 flex flex-col">
      <h3 class="text-lg font-semibold text-white mb-4">Documents</h3>
      <div v-if="documents.length === 0" class="text-gray-400 text-center py-8">
        No documents in this workspace.
      </div>
      <ul v-else class="space-y-1">
        <li v-for="doc in documents" :key="doc.id">
          <button @click="navigateToDocument(doc)"
            class="w-full flex items-center px-3 py-2 text-left rounded-lg text-gray-200 hover:bg-gray-800 transition-colors group">
            <svg class="w-4 h-4 mr-2 text-gray-500 group-hover:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="truncate">{{ doc.title || doc.name }}</span>
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Dummy workspace documents for now; replace with actual workspace prop or store
const documents = ref([
  { id: 'test', name: 'dummy document', title: 'Dummy Document', description: 'dummy test document' }
]);

const route = useRoute();
const router = useRouter();

// Watch for workspace changes and update documents accordingly (replace with real data source)
watch(() => route.params.id, (newId) => {
  // TODO: Fetch documents for the new workspace
  // For now, keep dummy data
});

function navigateToDocument(doc) {
  // TODO: Use router to navigate to the document view
  // Example: router.push(`/workspace/${route.params.id}/document/${doc.id}`)
  // For now, just log
  console.log('Navigate to document:', doc);
}
</script>

