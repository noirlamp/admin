<template>
  <iframe :src="src" />
</template>

<script setup>
defineOptions({
  name: 'IframePage'
})

defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>
