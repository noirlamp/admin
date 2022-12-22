<template>
  <div class="w-[640px] h-[480px]">
    <video
      ref="vdo"
      :src="video"
      controls
      crossorigin="anonymous"
      @loadeddata="loadFirst"
    />
    <img
      crossorigin="anonymous"
      :src="result"
    >
    <el-button
      type="primary"
      @click="capture"
    >
      截取
    </el-button>
  </div>
  <div class="hidden">
    <canvas ref="cvs" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

defineProps({
  video: {
    type: String,
    required: true
  }
})

const dataURLtoFile = (dataurl, name) => {
  const arr = dataurl.split(',')
  const bstr = window.atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], name, { type: 'image/jpeg' })
}

const result = ref('')

const vdo = ref(null)
const cvs = ref(null)

let ctx = null

const loadFirst = () => {
  cvs.value.width = vdo.value.videoWidth
  cvs.value.height = vdo.value.videoHeight
  ctx.drawImage(vdo.value, 0, 0, vdo.value.videoWidth, vdo.value.videoHeight)
  result.value = cvs.value.toDataURL('image/jpeg')
}

const capture = () => {
  cvs.value.width = vdo.value.videoWidth
  cvs.value.height = vdo.value.videoHeight
  ctx.drawImage(vdo.value, 0, 0, vdo.value.videoWidth, vdo.value.videoHeight)
  result.value = cvs.value.toDataURL('image/jpeg')

  const a = document.createElement('a')
  const e = new MouseEvent('click')
  a.download = 'picture.jpg'
  a.href = result.value
  a.dispatchEvent(e)

  console.log(dataURLtoFile(result.value, 'file.jpg'))
}

onMounted(() => {
  ctx = cvs.value.getContext('2d')
})

</script>
