<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      type="button"
      class="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <span class="flex items-center">
        <span class="mr-2">{{ getCurrentLanguageFlag() }}</span>
        {{ getCurrentLanguageName() }}
      </span>
      <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      v-if="isOpen"
      class="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
        <li v-for="lang in availableLanguages" :key="lang.code">
          <button
            @click="changeLanguage(lang.code)"
            class="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            :class="{ 'bg-gray-100 dark:bg-gray-600': currentLanguage === lang.code }"
          >
            <span class="mr-2">{{ lang.flag }}</span>
            {{ lang.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../stores/language'

const { locale } = useI18n()
const languageStore = useLanguageStore()
const isOpen = ref(false)

const currentLanguage = computed(() => languageStore.currentLanguage)

const availableLanguages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' }
]

const getCurrentLanguageName = () => {
  const lang = availableLanguages.find(l => l.code === currentLanguage.value)
  return lang ? lang.name : 'English'
}

const getCurrentLanguageFlag = () => {
  const lang = availableLanguages.find(l => l.code === currentLanguage.value)
  return lang ? lang.flag : '🇺🇸'
}

const changeLanguage = (langCode) => {
  // Update both the store and i18n locale
  languageStore.setLanguage(langCode)
  locale.value = langCode
  isOpen.value = false
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  // Sync i18n locale with store on mount
  locale.value = languageStore.getLanguage()
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script> 