<template>
  <el-drawer
    v-model="appStore.settingsShow"
    :size="320"
  >
    <template #header>
      <div>项目配置</div>
    </template>
    <template #default>
      <el-scrollbar>
        <div class="flex items-center justify-between">
          <div>黑暗主题</div>
          <el-switch
            v-model="appStore.darkMode"
            inline-prompt
            :active-icon="Moon"
            :inactive-icon="Sunny"
            @change="appStore.toggleThemeMode"
          />
        </div>
      </el-scrollbar>
    </template>
  </el-drawer>
</template>

<script setup>
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

// const settingsShow = computed(() => appStore.settingsShow)

defineOptions({
  name: 'SettingDrawer'
})

</script>

<style lang="scss" scoped>
</style>
