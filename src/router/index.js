import { createRouter, createWebHashHistory } from 'vue-router'
import { pinia, useGlobalStore, useUserStore } from '@/store'

import staticRoutes from './routes/static'
import dynamicRoutes from './routes/dynamic'

// const publicPath = ['/login', '/register']

const globalStore = useGlobalStore(pinia)
// const userStore = useUserStore(pinia)

const routes = staticRoutes.concat(dynamicRoutes)

globalStore.updateRoutes(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to) => {
  // if (!userStore.isAuthenticated && !publicPath.includes(to.path)) {
  //   return { path: '/login' }
  // }
  document.title = to.meta.title || import.meta.env.VITE_APP_NAME
})

export default router
