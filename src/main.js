import { createApp } from 'vue'
import 'flowbite';
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { appTextMessages } from './app-text-messages'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

// Get saved language from localStorage or default to 'es'
const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('app-language')
  return savedLanguage || 'es'
}

const i18n = createI18n({
    locale: getInitialLanguage(),
    fallbackLocale: 'en',
    messages: appTextMessages
})

app.use(pinia).use(i18n).use(router).mount('#app')
