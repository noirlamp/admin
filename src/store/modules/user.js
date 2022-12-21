import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    userInfo: {}
  }),
  getters: {},
  actions: {
    login: async () => {

    }
  }
})

export default useUserStore
