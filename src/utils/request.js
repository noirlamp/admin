import axios from 'axios'
import { getLocalStorage } from './cache'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  withCredentials: true,
  timeout: 30000,
  validateStatus: () => true
})

service.interceptors.request.use(config => {
  const token = getLocalStorage('noirlamp_admin_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

service.interceptors.response.use(response => {
  return response
})

export default service
