<template>
  <el-container class="w-screen h-screen overflow-hidden">
    <el-aside
      class="flex flex-col flex-shrink-0 transition-all menu-bg border-solid border-0 border-r border-[#e4e7ed] dark:border-0"
      :style="{ width: settingsStore.menuCollapse ? '64px' : '210px' }"
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
import AppMenu from './AppMenu.vue'
import AppHeader from './AppHeader.vue'
import { useSettingsStore } from '@/store'

const settingsStore = useSettingsStore()

</script>
