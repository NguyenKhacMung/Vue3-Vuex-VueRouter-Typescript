import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { PATH } from './path'
import { userStorage } from '@/storage'

const routes: Array<RouteRecordRaw> = [
  {
    path: PATH.LOGIN,
    name: 'Login',
    component: () => import('@/views/login/LoginView.vue'),
    props: { requiresAuth: true },
  },
  {
    path: PATH.ROOT,
    name: 'Home',
    component: () => import('@/views/home/HomeView.vue'),
    meta: { requiresAuth: true },
    // redirect: '/todo',
    children: [
      {
        path: '',
        name: 'Todo',
        component: () => import('@/views/home/todo/TodoView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: PATH.ABOUT,
        name: 'About',
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
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
})

router.beforeEach((to, from, next) => {
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

  document.title = (to.name as string) || 'TodoApp'
})

export default router
