import { createApp } from 'vue'
import App from './App.vue'
import { Iconify, SvgIcon } from '@/components/Icon'

import router from '@/router'
import { pinia } from '@/store'

import './styles/tailwind.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/theme.scss'

import 'virtual:svg-icons-register'

const globalComponents = [
  {
    name: 'Iconify',
    component: Iconify
  },
  {
    name: 'SvgIcon',
    component: SvgIcon
  }
]

const app = createApp(App)

globalComponents.forEach(item => {
  const { name, component } = item
  app.component(name, component)
})

app
  .use(router)
  .use(pinia)
  .mount('#app')
