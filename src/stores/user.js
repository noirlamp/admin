import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = reactive({
    avatar: '',
    nick: ''
  })

  const getUserInfo = computed(() => userInfo)

  return {
    userInfo,
    getUserInfo
  }
})
