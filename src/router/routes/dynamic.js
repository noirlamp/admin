import Layout from '@/components/Layout/index.vue'

export default [
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
          title: '工作台',
          menu: true,
          icon: 'material-symbols:dashboard-rounded'
        }
      }
    ]
  },
  {
    path: '/sys',
    name: 'System',
    component: Layout,
    redirect: '/sys/user',
    meta: {
      title: '系统管理',
      menu: true,
      alwaysShow: true,
      icon: 'material-symbols:admin-panel-settings-rounded'
    },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/System/User.vue'),
        meta: {
          title: '用户管理',
          icon: 'material-symbols:person'
        }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/System/Role.vue'),
        meta: {
          title: '角色管理',
          icon: 'material-symbols:verified-user-rounded'
        }
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/System/Menu.vue'),
        meta: {
          title: '菜单管理',
          icon: 'material-symbols:menu-open-rounded'
        }
      }
    ]
  },
  {
    path: '/feat',
    name: 'Feature',
    component: Layout,
    redirect: '/feat/icons',
    meta: {
      title: '功能',
      menu: true,
      alwaysShow: true,
      icon: 'material-symbols:functions-rounded'
    },
    children: [
      {
        path: 'icons',
        name: 'Icons',
        component: () => import('@/views/Feature/Icons.vue'),
        meta: {
          title: '图标应用',
          icon: 'material-symbols:radio-button-checked'
        }
      },
      {
        path: 'print',
        name: 'Print',
        component: () => import('@/views/Feature/Print.vue'),
        meta: {
          title: '打印',
          icon: 'material-symbols:print-rounded'
        }
      },
      {
        path: 'video',
        name: 'Video',
        component: () => import('@/views/Feature/VideoCapture.vue'),
        meta: {
          title: '视频截图',
          icon: 'material-symbols:video-camera-back-rounded'
        }
      },
      {
        path: 'audio',
        name: 'Audio',
        component: () => import('@/views/Feature/AudioPlayer.vue'),
        meta: {
          title: '音频播放',
          icon: 'material-symbols:audio-file-rounded'
        }
      }
    ]
  },
  {
    path: '/comp',
    name: 'Components',
    component: Layout,
    redirect: '/comp/common',
    meta: {
      title: '组件',
      menu: true,
      alwaysShow: true,
      icon: 'material-symbols:layers-rounded'
    },
    children: [
      {
        path: 'common',
        name: 'Common',
        component: () => import('@/views/Components/Common.vue'),
        meta: {
          title: '基础组件',
          icon: 'material-symbols:width-normal'
        }
      },
      {
        path: 'color-palette',
        name: 'ColorPalette',
        component: () => import('@/views/Components/ColorPalette.vue'),
        meta: {
          title: '获取主题色',
          icon: 'material-symbols:format-paint-rounded'
        }
      }
    ]
  }
]
