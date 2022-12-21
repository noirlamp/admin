<template>
  <app-logo />
  <el-scrollbar>
    <el-menu
      class="border-0"
      mode="vertical"
      :default-active="$route.path"
      :collapse="menuCollapse"
      :collapse-transition="false"
    >
      <menu-item
        v-for="(route) in menuRoutes"
        :key="route.path"
        :route="route"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import AppLogo from './AppLogo.vue'
import MenuItem from './MenuItem.vue'
import { useSettingsStore } from '@/store'

const router = useRouter()
const settingsStore = useSettingsStore()

const menuCollapse = computed(() => settingsStore.menuCollapse)

// console.log(router.getRoutes().filter(item => item.meta.menu))

const generatePath = (routes = [], basePath = '') => {
  if (basePath) {
    return routes.map(route => {
      const { path, children } = route
      // 逻辑判断用以防止重复添加上一级路由路由的问题
      // TODO: 找到重复添加父级路由路径问题的原因
      if (path.startsWith(basePath)) {
        route.path = path
      } else {
        route.path = `${basePath}/${path}`
      }
      if (route?.children?.length) {
        route.children = generatePath(children, route.path)
      }
      return route
    })
  } else {
    return routes.map(route => {
      const { path, children } = route
      if (route?.children?.length) {
        route.children = generatePath(children, path)
      }
      return route
    })
  }
}

const menuRoutes = computed(() => generatePath(router.getRoutes().filter(item => item?.meta?.menu)))

onMounted(() => {
  // console.log(menuCollapse.value)
  // console.log(menuCollapse)
  console.log(menuRoutes.value)
})

</script>
