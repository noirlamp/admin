// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    darkMode: true,
    layout: 'DefaultLayout',
    menuCollapse: false,
    appTitle: import.meta.env.VITE_APP_NAME,
    tagsViewEnable: true,
    settingsShow: false
  }),
  getters: {
    getLayout () {
      return this.layout
    },
    getAppTitle () {
      return this.appTitle
    },
    getMenuCollapse () {
      return this.menuCollapse
    }
  },
  actions: {
    toggleThemeMode () {
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    toggleMenuCollapse () {
      this.menuCollapse = !this.menuCollapse
    },
    toggleSettings () {
      this.settingsShow = !this.settingsShow
    }
  }
})

// export const useAppStore = defineStore('app', () => {
//   const darkMode = ref('dark')
//   const layout = ref('DefaultLayout')
//   const menuCollapse = ref(false)
//   const appTitle = ref(import.meta.env.VITE_APP_NAME)
//   const tagsViewEnable = ref(true)

//   const getLayout = computed(() => layout)
//   const getAppTitle = computed(() => appTitle)
//   const getMenuCollapse = computed(() => menuCollapse)

//   const toggleMenuCollapse = () => {
//     menuCollapse.value = !menuCollapse.value
//   }

//   return {
//     darkMode,
//     layout,
//     menuCollapse,
//     appTitle,
//     tagsViewEnable,
//     getLayout,
//     getAppTitle,
//     getMenuCollapse,
//     toggleMenuCollapse
//   }
// })
