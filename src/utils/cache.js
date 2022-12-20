import { encryptByAES, decryptByAES } from './cipher'
import { isJSONString } from './index'

export const setLocalStorage = (key, value) => {
  let setValue = value instanceof Object ? JSON.stringify(value) : value
  if (import.meta.env.PROD) {
    setValue = encryptByAES(setValue)
  }
  window.localStorage.setItem(key, setValue)
}

export const getLocalStorage = (key) => {
  let getValue = window.localStorage.getItem(key)
  if (import.meta.env.PROD) {
    getValue = decryptByAES(getValue)
  }
  return isJSONString(getValue) ? JSON.parse(getValue) : getValue
}

export default {
  setLocalStorage,
  getLocalStorage
}
