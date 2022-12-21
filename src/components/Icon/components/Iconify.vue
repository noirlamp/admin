<template>
  <iconify-vue
    :icon="icon"
    :width="size"
    :height="size"
    :color="color"
  />
</template>

<script setup>
import { Icon as IconifyVue } from '@iconify/vue'

defineProps({
  icon: {
    type: String,
    required: true,
    default: ''
  },
  size: {
    type: [Number, String],
    default: 16
  },
  color: {
    type: String,
    default: ''
  }
})

</script>
