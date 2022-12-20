<template>
  <video-capturer video="https://vjs.zencdn.net/v/oceans.mp4" />
</template>

<script setup>
import VideoCapturer from '@/components/VideoCapturer.vue'

defineOptions({
  name: 'VideoCapture'
})

</script>

<style lang="scss" scoped>

</style>
