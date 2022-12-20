<template>
  <el-row>
    <el-col
      class="mb-4"
      :span="24"
    >
      <el-card>
        <template #header>
          @element-plus/icons-vue
        </template>
        <div class="flex items-center justify-between">
          <el-icon :size="24">
            <AddLocation />
          </el-icon>
          <el-icon :size="24">
            <Aim />
          </el-icon>
          <el-icon :size="24">
            <AlarmClock />
          </el-icon>
          <el-icon :size="24">
            <Apple />
          </el-icon>
          <el-icon :size="24">
            <Avatar />
          </el-icon>
        </div>
      </el-card>
    </el-col>
    <el-col
      class="mb-4"
      :span="24"
    >
      <el-card>
        <template #header>
          Iconify
        </template>
        <div class="flex items-center justify-between">
          <icon
            icon="ant-design:wechat-filled"
            :size="24"
          />
          <icon
            icon="ant-design:qq-outlined"
            :size="24"
          />
          <icon
            icon="ant-design:weibo-outlined"
            :size="24"
          />
          <icon
            icon="ant-design:zhihu-outlined"
            :size="24"
          />
          <icon
            icon="ant-design:yuque-filled"
            :size="24"
          />
        </div>
      </el-card>
    </el-col>
    <el-col
      class="mb-4"
      :span="24"
    >
      <el-card>
        <template #header>
          SVG Icons
        </template>
        <div class="flex items-center justify-between">
          <icon
            icon="icon_1"
            :size="24"
          />
          <icon
            icon="icon_2"
            :size="24"
          />
          <icon
            icon="icon_3"
            :size="24"
          />
          <icon
            icon="icon_4"
            :size="24"
          />
          <icon
            icon="icon_5"
            :size="24"
          />
        </div>
      </el-card>
    </el-col>
    <el-col
      class="mb-4"
      :span="24"
    >
      <el-alert
        type="info"
        show-icon
        :closable="false"
      >
        <template #title>
          <span class="text-[16px]">推荐使用 Iconify 图标体系</span>
        </template>
        <template #default>
          <span class="text-[14px]">Icon组件基本包含所有的图标,在下面网址内你可以查询到你想要的任何图标。并且打包只会打包所用到的图标。<a href="https://iconify.design/">Iconify 地址</a></span>
        </template>
      </el-alert>
    </el-col>
  </el-row>
</template>

<script setup>
import { AddLocation, Aim, AlarmClock, Apple, Avatar } from '@element-plus/icons-vue'

defineOptions({
  name: 'IconsPage'
})

</script>
