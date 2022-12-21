<template>
  <a
    v-if="isExternal(to)"
    :href="to"
    target="_blank"
  >
    <slot />
  </a>
  <router-link
    v-else
    :to="to"
  >
    <slot />
  </router-link>
</template>

<script setup>
import { isExternal } from '@/utils'

defineProps({
  to: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped>
</style>
