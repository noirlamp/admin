<template>
  <el-row :gutter="20">
    <el-col
      v-for="(item, index) in imgList"
      :key="index"
      :span="8"
    >
      <main-color :img="item" />
    </el-col>
  </el-row>
</template>

<script setup>
import MainColor from '@/components/MainColor.vue'
import gg from '@/assets/images/gg.jpg'
import pb from '@/assets/images/pb.jpg'
import yg from '@/assets/images/yg.jpg'

const imgList = [
  gg,
  pb,
  yg
]

</script>
