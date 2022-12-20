<template>
  <el-container class="w-screen h-screen overflow-hidden">
    <el-aside
      class="flex flex-col flex-shrink-0 transition-all menu-bg border-solid border-0 border-r border-[#e4e7ed] dark:border-0"
      :style="{ width: menuCollapse ? '64px' : '210px' }"
    >
      <app-menu />
    </el-aside>
    <el-container>
      <el-header class="header-bg border-solid border-0 border-b border-[#e4e7ed] dark:border-0">
        <app-header />
      </el-header>
      <app-main />
    </el-container>
  </el-container>
</template>

<script setup>
import AppMain from './AppMain.vue'
import { useAppStore } from '@/stores/app'
import { AppMenu, AppHeader } from '@/components/Application'
import { computed } from 'vue'

const appStore = useAppStore()
// const changeColor = () => { }

const menuCollapse = computed(() => appStore.getMenuCollapse)

const menuBgColor = ref('#1d1d1d')
const headerBgColor = ref('#191919')

</script>

<style lang="scss" scoped>
.dark .menu-bg {
  background-color: v-bind(menuBgColor);
}

.dark .header-bg {
  background-color: v-bind(headerBgColor);
}
</style>
