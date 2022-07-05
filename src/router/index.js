import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/layout/index'

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页',
          icon: '<home-outlined/>'
        },
        component: () => import('@/views/index')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
