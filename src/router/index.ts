import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import PortfolioPage from '@/views/PortfolioPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: PortfolioPage
    }
  ],
})

export default router
