<template>
  <el-card class="w-full">
    <img
      ref="targetImg"
      class="w-full h-[280px] object-contain"
      :src="img"
      @load="imgLoaded"
    >
    <div class="flex items-center h-[40px] pt-[10px]">
      <el-tooltip
        v-for="item in colorList"
        :key="item.join('')"
        placement="top"
      >
        <template #content>
          {{ `rgb(${item.join(',')})` }}<br>
          {{ toHex(item) }}
        </template>
        <div
          class="h-full flex-1 cursor-pointer"
          :style="{ 'backgroundColor': `rgb(${item.join(',')})` }"
        />
      </el-tooltip>
    </div>
  </el-card>
</template>

<script setup>
import ColorThief from 'colorthief'

const colorThief = new ColorThief()

const props = defineProps({
  img: {
    type: String,
    required: true
  },
  num: {
    type: Number,
    default: 10
  }
})

const targetImg = ref(null)

const colorList = ref([])

const toHex = (arr) => {
  return `#${arr.map(item => {
    const hex = item.toString(16)
    let hexStr = ''
    if (hex.length === 1) {
      hexStr = `0${hex}`
    } else {
      hexStr = hex
    }
    return hexStr.toUpperCase()
  }).join('')}`
}

const imgLoaded = () => {
  colorList.value = colorThief.getPalette(targetImg.value, props.num)
}

</script>

<style lang="scss" scoped>
</style>
