import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Pages/Home.vue'
import PortfolioDashboard from '../Pages/PortfolioDashboard.vue'
import AboutMe from '../Pages/PortfolioSections/AboutMe.vue'
import Details from '../Pages/PortfolioSections/Details.vue'
import Skills from '../Pages/PortfolioSections/Skills.vue'
import AcademicHistory from '../Pages/PortfolioSections/AcademicHistory.vue'

import NotFound from '../Pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Portfolio-Dashboard',
    name: 'PortfolioDashboard',
    component: PortfolioDashboard,
  },
  {
    path: '/Academic-History',
    name: 'AcademicHistory',
    component: AcademicHistory,
  },
  {
    path: '/Details',
    name: 'Details',
    component: Details,
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/About-Me',
    name: 'AboutMe',
    component: AboutMe,
  },
  {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
