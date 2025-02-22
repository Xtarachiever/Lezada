import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about-us',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/about-us-two',
      name: 'AboutUsTwo',
      component: () => import('../views/AboutTwoView.vue'),
    },
    {
      path: '/other/login-register',
      name: 'Register',
      component: () => import('../views/RegistrationView.vue'),
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: () => import('../views/WishListView.vue'),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue'),
    },
  ],
})

export default router
