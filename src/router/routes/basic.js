import Layout from '@/layout/index.vue'

const RootRoute = {
  path: '/',
  name: 'Root',
  component: Layout,
  redirect: '/dashboard',
  meta: {
    title: import.meta.env.VITE_APP_NAME,
    menu: false
  }
}

const LoginRoute = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/Login.vue'),
  meta: {
    title: '登录',
    menu: false
  }
}

const UnauthorizedRoute = {
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
      component: () => import('@/views/Unauthorized.vue'),
      meta: {
        title: '无权访问',
        menu: false
      }
    }
  ]
}

const InternalServerErrorRoute = {
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
      component: () => import('@/views/InternalServerError.vue'),
      meta: {
        title: '服务器内部错误'
      }
    }
  ]
}

const NotFoundRoute = {
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
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: '未找到'
      }
    }
  ]
}

const DashboardRoute = {
  path: '/dashboard',
  component: Layout,
  children: [
    {
      path: '',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard/DashboardComponent.vue'),
      meta: {
        title: '工作台',
        menu: true,
        icon: 'material-symbols:dashboard-rounded'
      }
    }
  ]
}

const RedirectRoute = {
  path: '/redirect',
  name: 'Redirect',
  component: Layout,
  meta: {
    title: '正在跳转',
    menu: false
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: 'Redirect',
      component: () => import('@/views/Redirect.vue'),
      meta: {
        title: '正在跳转'
      }
    }
  ]
}

export const basicRoutes = [
  LoginRoute,
  RootRoute,
  DashboardRoute,
  RedirectRoute,
  InternalServerErrorRoute,
  UnauthorizedRoute,
  NotFoundRoute
]
