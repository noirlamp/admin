<template>
  <div>
    {{ title }}
  </div>
</template>

<script setup>
defineOptions({
  name: 'PageHeader'
})

defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
