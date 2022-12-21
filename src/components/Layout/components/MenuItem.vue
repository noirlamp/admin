<template>
  <app-link
    v-if="(!route.children || route.children.length <= 1) && !route.meta.alwaysShow"
    :to="route.path"
  >
    <el-menu-item :index="route.path">
      <div class="flex items-center">
        <iconify
          v-if="route.meta.icon"
          :size="20"
          :icon="route.meta.icon"
        />
        <div
          v-if="!menuCollapse || children"
          class="ml-2"
        >
          {{ route.meta.title }}
        </div>
      </div>
    </el-menu-item>
  </app-link>
  <el-sub-menu
    v-else
    :index="route.path"
  >
    <template #title>
      <div class="flex items-center">
        <iconify
          v-if="route.meta.icon"
          :size="20"
          :icon="route.meta.icon"
        />
        <div
          v-if="!menuCollapse || children"
          class="ml-2"
        >
          {{ route.meta.title }}
        </div>
      </div>
    </template>
    <menu-item
      v-for="(child) in route.children"
      :key="`route.path/${child.path}`"
      :route="child"
      :parent="route"
      :children="true"
    />
  </el-sub-menu>
</template>

<script setup>
import { useSettingsStore } from '@/store'
import AppLink from './AppLink.vue'

const settingsStore = useSettingsStore()
const menuCollapse = computed(() => settingsStore.menuCollapse)

defineProps({
  route: {
    type: Object,
    required: true
  },
  children: {
    type: Boolean,
    default: false
  }
})

</script>

<style lang="scss" scoped>
</style>
