<template>
  <div class="w-full h-full flex justify-between">
    <div class="h-full flex items-center">
      <toggle-menu-icon class="mr-2" />
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item
          v-for="(item) in breadcrumbs"
          :key="item.path"
          :to="item.redirect ? null : item"
        >
          <iconify
            class="mr-1"
            :icon="item.meta.icon"
          />
          <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="h-full flex items-center">
      <div
        class="h-full px-2 cursor-pointer flex items-center justify-center min-w-[50px] hover:bg-[rgba(255,255,255,.2)]"
        @click="settingsStore.toggleSettings()"
      >
        <iconify
          icon="ep:tools"
          :size="20"
        />
      </div>
      <user-menu class="ml-1" />
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import ToggleMenuIcon from './ToggleMenuIcon.vue'
import UserMenu from './UserMenu.vue'
import { useSettingsStore } from '@/store'

const settingsStore = useSettingsStore()

const route = useRoute()

const breadcrumbs = ref([])

const isDashboard = (route) => {
  const name = route && route.name

  return name ? (name.toString().trim().toLocaleLowerCase() === 'dashboard') : false
}

const getBreadcrumb = () => {
  let matched = route.matched.filter(item => item.meta && item.meta.title)
  const first = matched[0]

  if (!isDashboard(first)) {
    matched = [
      { path: '/dashboard', meta: { title: '工作台', menu: true, icon: 'material-symbols:dashboard-rounded' } }
    ].concat(matched)
  }

  breadcrumbs.value = matched.filter(item => item.meta && item.meta.title)
}

watch(() => route.path, path => {
  if (path.startsWith('/redirect/')) {
    return false
  }
  getBreadcrumb()
})

onBeforeMount(() => {
  getBreadcrumb()
})

</script>
