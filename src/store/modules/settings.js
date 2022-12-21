import { defineStore } from 'pinia'
import Left from '@/components/Layout/components/Left.vue'
import Top from '@/components/Layout/components/Top.vue'
import LeftMixed from '@/components/Layout/components/LeftMixed.vue'
import TopMixed from '@/components/Layout/components/TopMixed.vue'

const useSettingsStore = defineStore('settings', {
  state: () => ({
    layout: 'Left',
    layouts: {
      Left,
      Top,
      LeftMixed,
      TopMixed
    },
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
