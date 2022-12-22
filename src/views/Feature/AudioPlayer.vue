<template>
  <div class="audio-player">
    <el-row :gutter="20">
      <el-col
        :span="8"
      >
        <audio-player
          id-num="20"
          audio="https://wavesurfer-js.org/example/media/demo.wav"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import AudioPlayer from '@/components/AudioPlayer.vue'
</script>
