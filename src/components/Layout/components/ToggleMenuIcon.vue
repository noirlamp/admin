<template>
  <div
    class="flex items-center h-full cursor-pointer"
    @click="settingsStore.toggleMenuCollapse()"
  >
    <iconify
      v-show="menuCollapse"
      icon="ep:expand"
      size="22"
    />
    <iconify
      v-show="!menuCollapse"
      icon="ep:fold"
      size="22"
    />
  </div>
</template>

<script setup>
import { useSettingsStore } from '@/store'

const settingsStore = useSettingsStore()

const menuCollapse = computed(() => settingsStore.menuCollapse)

</script>
