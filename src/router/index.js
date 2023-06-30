import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/SkillsView.vue')
  },
  {
    path: '/eduexp',
    name: 'eduexp',
    component: () => import ('../views/EduexpView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import ('../views/ProjectView.vue')
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: () => import ('../views/TestimonialView.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
