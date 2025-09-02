import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import PortfolioPage from '@/views/PortfolioPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/bible-o-tech/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/bible-o-tech/about',
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
