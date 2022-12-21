<template>
  <el-drawer
    v-model="settingsStore.settings"
    :size="320"
  >
    <template #header>
      <div>项目配置</div>
    </template>
    <template #default>
      <el-scrollbar>
        <div class="flex items-center justify-between">
          <div>暗色主题</div>
          <el-switch
            v-model="settingsStore.darkMode"
            inline-prompt
            :active-icon="Moon"
            :inactive-icon="Sunny"
            @change="darkModeChange"
          />
        </div>
      </el-scrollbar>
    </template>
  </el-drawer>
</template>

<script setup>
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useSettingsStore } from '@/store'

const settingsStore = useSettingsStore()

const darkModeChange = () => {
  console.log('change')
  if (settingsStore.darkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// const settingsShow = computed(() => appStore.settingsShow)

</script>

<style lang="scss" scoped>
</style>
