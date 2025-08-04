import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  // Get initial language from localStorage or default to 'es'
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('app-language')
    return savedLanguage || 'es'
  }

  const currentLanguage = ref(getInitialLanguage())

  const setLanguage = (language) => {
    currentLanguage.value = language
    localStorage.setItem('app-language', language)
  }

  const getLanguage = () => {
    return currentLanguage.value
  }

  return {
    currentLanguage,
    setLanguage,
    getLanguage
  }
}) 