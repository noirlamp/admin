import { defineStore } from 'pinia'

const useGlobalStore = defineStore('global', {
  state: () => ({
    routes: []
  }),
  getters: {},
  actions: {
    updateRoutes(routes) {
      this.routes = routes
    }
  }
})

export default useGlobalStore
