<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<script setup>
// TODO: 这里做整个程序的预配置，授权，跳转等
import zhCn from 'element-plus/es/locale/lang/zh-cn'

defineOptions({
  name: 'App'
})

</script>
