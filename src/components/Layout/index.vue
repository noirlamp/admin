<template>
  <component :is="layouts[settingsStore.layout]" />
  <setting-drawer />
</template>

<script setup>
import { useSettingsStore } from '@/store'
import layouts from './layouts'
import SettingDrawer from './components/SettingDrawer.vue'

const settingsStore = useSettingsStore()

</script>
