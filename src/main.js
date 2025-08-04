import { createApp } from 'vue'
import 'flowbite';
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { appTextMessages } from './app-text-messages'

const pinia = createPinia()
const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages: appTextMessages
})


createApp(App).use(pinia).use(i18n).mount('#app')
