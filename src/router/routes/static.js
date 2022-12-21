import Layout from '@/components/Layout/index.vue'

export default [
  {
    path: '/',
    name: 'Index',
    redirect: '/dashboard',
    meta: {
      title: import.meta.env.VITE_APP_NAME,
      menu: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '系统登录',
      menu: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
    meta: {
      title: '系统登录',
      menu: false
    }
  },
  {
    path: '/redirect/:path(.*)',
    name: 'Redirect',
    component: () => import('@/views/Redirect.vue'),
    meta: {
      title: '跳转中',
      menu: false
    }
  },
  {
    path: '/401',
    name: 'Unauthorized',
    component: Layout,
    meta: {
      title: '无权访问',
      menu: false
    },
    children: [
      {
        path: '',
        name: 'Unauthorized',
        component: () => import('@/views/Errors/Unauthorized.vue'),
        meta: {
          title: '无权访问',
          menu: false
        }
      }
    ]
  },
  {
    path: '/500',
    name: 'InternalServerError',
    component: Layout,
    meta: {
      title: '服务器内部错误',
      menu: false
    },
    children: [
      {
        path: '/500',
        name: 'InternalServerError',
        component: () => import('@/views/Errors/InternalServerError.vue'),
        meta: {
          title: '服务器内部错误'
        }
      }
    ]
  },
  {
    path: '/:path(.*)*',
    name: 'NotFound',
    component: Layout,
    meta: {
      title: '未找到',
      menu: false
    },
    children: [
      {
        path: '/:path(.*)*',
        name: 'NotFound',
        component: () => import('@/views/Errors/NotFound.vue'),
        meta: {
          title: '未找到'
        }
      }
    ]
  }
]
