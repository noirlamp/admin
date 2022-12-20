<template>
  <div>
    <el-avatar
      :icon="Avatar"
      :src="userStore.getUserInfo.avatar"
    />
  </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'

defineOptions({
  name: 'UserMenu'
})

const userStore = useUserStore()

</script>

<style lang="scss" scoped>
</style>
