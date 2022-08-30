import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/LoginView.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/HomeView.vue'),
    children: [
      {
        path: '/todo',
        name: 'todo',
        component: () => import('@/views/home/todo/TodoView.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/home/about/AboutView.vue'),
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

export default router
