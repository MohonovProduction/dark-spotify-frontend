import { createRouter, createWebHistory } from 'vue-router'
import User from '../api/User'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/authorization',
    name: 'authorization',
    component: () => import('../views/Authorization.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/your-library',
    name: 'your-library',
    component: () => import('../views/YourLibrary.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/playlist',
    component: () => import('../views/PlayList.vue'),
    children: [
      {
        path: 'new',
      },
      {
        path: ':id'
      }
    ]
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (!User.isAuthorized() && to.meta.requiresAuth) {
    return {
      path: '/authorization',
      query: { redirect: to.fullPath }
    }
  }
})

export default router
