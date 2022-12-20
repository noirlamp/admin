<template>
  <div class="w-full h-full bg-gradient-to-t from-[#30cfd0] to-[#330867] relative">
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="!state.type && !state.loading"
        class="w-[840px] h-[480px] rounded-sm flex absolute left-0 right-0 top-0 bottom-0 m-auto bg-[rgba(255,255,255,.7)] dark:bg-[rgba(0,0,0,.7)]"
      >
        <div class="h-full flex-1 flex flex-col items-center justify-center">
          <img
            class="w-[150px]"
            src="/logo.svg"
            alt="logo"
          >
          <div class="text-2xl bold">
            Boretech Admin
          </div>
          <div class="text-base mt-4">
            Based on newest, easy to develop.
          </div>
        </div>
        <div class="h-full flex-1 flex items-center justify-center">
          <el-form
            ref="loginRef"
            :model="loginForm"
            :rules="loginRules"
          >
            <el-form-item
              class="flex"
              prop="username"
            >
              <el-input
                v-model="loginForm.username"
                class="w-full"
                type="text"
                placeholder="账号"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item class="flex">
              <el-input
                v-model="loginForm.password"
                class="w-full"
                type="password"
                placeholder="密码"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="login(loginRef)"
              >
                登录
              </el-button>
              <el-button
                type="primary"
                plain
                @click="state.type = 1"
              >
                注册
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </transition>
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="state.type"
        class="w-[840px] h-[480px] rounded-sm flex flex-col items-center absolute left-0 right-0 top-0 bottom-0 m-auto bg-[rgba(255,255,255,.7)] dark:bg-[rgba(0,0,0,.7)]"
      >
        <div class="text-2xl">
          注册
        </div>
        <el-form
          ref="registerRef"
          :model="registerForm"
          :rules="registerRules"
        >
          <el-form-item>
            <el-input
              v-model="registerForm.username"
              placeholder="请输入用户名"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="registerForm.password"
              type="password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="registerForm.email"
              placeholder="请输入邮箱"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="register(registerRef)"
            >
              注册
            </el-button>
            <el-button
              type="primary"
              plain
              @click="state.type = 0"
            >
              返回
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { encryptByMd5 } from '@/utils/cipher'
import request from '@/utils/request'
// import axios from 'axios'
import { setLocalStorage } from '@/utils/cache'
import { useRouter } from 'vue-router'

const router = useRouter()

defineOptions({
  name: 'Login'
})

// console.log(import.meta.env.DEV)

const state = reactive({
  type: 0,
  loading: true
})

const loginRef = ref(null)
const registerRef = ref(null)

const loginForm = reactive({
  username: 'boreuser',
  password: '123456'
})

const registerForm = reactive({
  username: '',
  password: '',
  repeat: '',
  email: '',
  phone: ''
})

const loginRules = reactive({
  username: [{
    validator: (rule, value, cb) => {
      if (value === '') {
        cb(new Error('请输入账户'))
      } else {
        cb()
      }
    },
    trigger: 'blur'
  }]
})

const registerRules = reactive({})

const login = (loginRef) => {
  if (!loginRef) return

  console.log(loginForm.username)
  console.log(loginForm.password)
  console.log(encryptByMd5(loginForm.password))

  request.post('/login', { username: loginForm.username, password: encryptByMd5(loginForm.password) }).then(res => {
    console.log(res)
    if (res.data.success) {
      setLocalStorage('bore_admin_token', res.data.data)
      router.push('/dashboard')
    }
  })

  // axios.post('http://localhost:3200/api/getToken', { username: loginForm.username, password: encryptByMd5(loginForm.password) }).then(res => {
  //   console.log(res)
  // })
}

const register = () => {
  request.post('/register', { username: registerForm.username, password: encryptByMd5(registerForm.password), email: registerForm.email }).then(res => {
    console.log(res)
  })
}

// const testToken = () => {
//   request.post('/post_api').then(res => {
//     console.log(res)
//   })
// }

onMounted(() => {
  state.loading = false
})

</script>

<style lang="scss" scoped>
</style>
