import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
  },
  {
    path: '/alerts',
    name: 'alerts',
    component: () => import('@/views/alerts/alerts.vue'),
  },
  {
    path: '/net-utils',
    name: 'NetworkUtils',
    component: () => import('@/views/net-utils/NetworkUtils.vue'),
    children: [
      {
        path: 'portscan',
        name: 'PortScanner',
        component: () => import('@/views/portscan.vue'),
      },
    ],
  },
  {
    path: '/assetsDashboard',
    name: 'AssetsDashboard',
    component: () => import('@/views/AssetManagement/AssetsDashboard.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/Login.vue'),
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
