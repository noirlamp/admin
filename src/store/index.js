import { createPinia } from 'pinia'

export const pinia = createPinia()

export { default as useGlobalStore } from './modules/global'
export { default as useSettingsStore } from './modules/settings'
export { default as useUserStore } from './modules/user'
