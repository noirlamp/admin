<template>
  <component :is="settingsStore.layouts[settingsStore.layout]" />
  <setting-drawer />
</template>

<script setup>
import { useSettingsStore } from '@/store'
import SettingDrawer from './components/SettingDrawer.vue'

const settingsStore = useSettingsStore()

</script>
