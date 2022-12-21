<template>
  <svg
    class="svg"
    :width="size"
    :height="size"
    :fill="color"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup>

const props = defineProps({
  icon: {
    type: String,
    required: true
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

const symbolId = computed(() => `#i-${props.icon}`)
</script>
