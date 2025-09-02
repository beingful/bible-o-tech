import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: import('@/views/HomePage.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: import('@/views/AboutPage.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: import('@/views/PortfolioPage.vue')
    }
  ],
})

export default router
