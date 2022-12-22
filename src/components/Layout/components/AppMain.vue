<template>
  <router-view v-slot="{ Component, route }">
    <div>{{ Component.name }}</div>
    <transition
      name="fade"
      mode="out-in"
    >
      <el-main
        :key="route.name"
      >
        <component
          :is="Component"
          :key="route.fullPath"
        />
      </el-main>
    </transition>
  </router-view>
</template>
