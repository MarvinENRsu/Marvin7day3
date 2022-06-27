import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/formlayout',
    name: 'formlayout',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/FormLayout.vue')
  },
  {
    path: '/testModal',
    name: 'testModal',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/TestModal.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
