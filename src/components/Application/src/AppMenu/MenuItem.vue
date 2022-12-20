<template>
  <app-link
    v-if="(!route.children || route.children.length <= 1) && !route.meta.alwaysShow"
    :to="route.path"
  >
    <el-menu-item :index="route.path">
      <div class="flex items-center">
        <icon
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
        <icon
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
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'
import AppLink from './AppLink.vue'

const appStore = useAppStore()
const menuCollapse = computed(() => appStore.getMenuCollapse)

defineOptions({
  name: 'MenuItem'
})

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

onMounted(() => {
  // console.log(props.route)
})

</script>

<style lang="scss" scoped>
</style>
