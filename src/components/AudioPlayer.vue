
<template>
  <div class="relative">
    <div
      :id="`audio-${idNum}`"
      class="w-full h-full"
    />
    <div @click="play">
      play
    </div>
    <div
      v-if="state.loading"
      class="w-full h-full flex items-center justify-center absolute top-0 left-0"
    >
      <iconify icon="line-md:loading-twotone-loop" />
    </div>
  </div>
</template>

<script setup>
import WaveSurfer from 'wavesurfer.js'

let wavesurfer = null

const props = defineProps({
  idNum: {
    type: String,
    required: true
  },
  audio: {
    type: String,
    required: true
  }
})

const state = reactive({
  loading: true
})

const play = () => {
  wavesurfer && wavesurfer.play()
}

onMounted(() => {
  wavesurfer = WaveSurfer.create({
    container: `#audio-${props.idNum}`,
    backend: 'MediaElement'
  })

  wavesurfer.on('ready', () => {
    state.loading = false
  })

  wavesurfer.load(props.audio)
})
</script>
