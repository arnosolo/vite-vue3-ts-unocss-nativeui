import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import './style.css'
// General Font
import 'vfonts/Lato.css'
// Monospace Font
import 'vfonts/FiraCode.css'
import 'uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
