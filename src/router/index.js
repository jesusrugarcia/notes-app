import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/workspace/:id',
    name: 'Workspace',
    component: () => import('@/views/WorkSpaceView.vue'),
  },
  {
    path: '/workspaces',
    name: 'Workspaces',
    component: () => import('@/views/HomeView.vue'),
  },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
  })
  
  export default router