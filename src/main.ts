import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import { registrationDataStore } from './stores/registrationDataStore'

const app = createApp(App)
const pinia = createPinia()

app.use(VueTheMask)
app.use(pinia)
app.use(router)

const store = registrationDataStore()
store.loadFromLocalStorage()

app.mount('#app')
