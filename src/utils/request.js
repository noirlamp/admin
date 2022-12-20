import axios from 'axios'
import { getToken } from './auth'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  withCredentials: true,
  timeout: 30000,
  validateStatus: () => true
})

// 请求拦截器
service.interceptors.request.use(config => {
  console.log(config)
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 返回拦截器
service.interceptors.response.use(response => {
  const status = response.status
  if (status < 200 || status >= 300 && status !== 401 && status !== 500) {
    console.error(status)
  }
  if (status === 200) {
    return response
  }
})

export default service
