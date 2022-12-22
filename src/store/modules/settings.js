import { defineStore } from 'pinia'

const useSettingsStore = defineStore('settings', {
  state: () => ({
    layout: 'Left',
    menuCollapse: false,
    settings: false,
    darkMode: true
  }),
  getters: {},
  actions: {
    changeLayout(layout) {
      this.layout = layout
    },
    toggleMenuCollapse() {
      this.menuCollapse = !this.menuCollapse
    },
    toggleSettings() {
      this.settings = !this.settings
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    }
  }
})

export default useSettingsStore
