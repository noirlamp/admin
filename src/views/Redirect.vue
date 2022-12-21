<template>
  <div />
</template>

<script setup>
const route = useRoute()
const router = useRouter()
router.replace({
  path: decodeURIComponent(route.params.path),
  query: route.query
})
</script>
