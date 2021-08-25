import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@/components/Icon'
import store from './store'

createApp(App).use(store)
    .component('Icon', Icon)
    .mount('#app')