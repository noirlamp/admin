import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import { pinia } from '@/store'

import './styles/tailwind.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import 'virtual:svg-icons-register'

const app = createApp(App)

app
  .use(router)
  .use(pinia)
  .mount('#app')
