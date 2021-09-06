import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// Global components
import Icon from '@/components/Icon'

// Create App
createApp(App).use(store)
    .component('Icon', Icon)
    .mount('#app')