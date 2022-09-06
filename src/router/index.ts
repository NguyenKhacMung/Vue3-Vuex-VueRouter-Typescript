import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { PATH } from './path'
import { userStorage } from '@/storage'

const routes: Array<RouteRecordRaw> = [
  {
    path: PATH.LOGIN,
    name: 'Login',
    component: () => import('@/views/login/LoginView.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/HomeView.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'todo',
        component: () => import('@/views/home/todo/TodoView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: PATH.ABOUT,
        name: 'about',
        component: () => import('@/views/home/about/AboutView.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('@/views/error/ErrorView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  // console.log('to', to, 'from', from, 'next', next)

  // if (!authRequired && !loggedIn) {
  //   return next('/login')
  // }

  // next()
  const loggedIn = JSON.parse(userStorage.getLocalStorage()!)
  if (to.meta.requiresAuth) {
    if (!loggedIn) {
      return next('/login')
    }
    next()
  } else {
    const publicPages = ['/login', '/register']
    const authRequired = publicPages.includes(to.path)
    if (loggedIn && authRequired) {
      return next(from.path)
    }
    next()
  }
})

export default router
