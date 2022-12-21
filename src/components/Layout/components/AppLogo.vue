<template>
  <router-link
    class="h-[60px] px-[10px] flex items-center flex-nowrap cursor-pointer overflow-hidden"
    :class="{'justify-center': settingsStore.menuCollapse}"
    :to="`/redirect/${encodeURIComponent('/')}`"
  >
    <svg-icon
      icon="logo"
      :size="32"
    />
    <div
      v-if="showTitle"
      class="title ml-2 font-bold whitespace-nowrap"
    >
      {{ appTitle }}
    </div>
  </router-link>
</template>

<script setup>
import { useSettingsStore } from '@/store'

const settingsStore = useSettingsStore()

const appTitle = import.meta.env.VITE_APP_NAME

const showTitle = computed(() => {
  if (settingsStore.layout === 'Left') {
    return !settingsStore.menuCollapse
  }
  return false
})

</script>

<style lang="scss" scoped>
.title {
  color: var(--el-text-color);
}
</style>
