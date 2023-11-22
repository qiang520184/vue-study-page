import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import loading from '@/plugin/loading'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(loading)

app.use(router)

app.mount('#app')

export default app