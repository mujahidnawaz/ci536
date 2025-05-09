import { createRouter, createWebHistory } from 'vue-router'

// Import views
import HomeView from '../views/HomeView.vue'
import GameDetailView from '../views/GameDetailView.vue'
import CartView from '../views/CartView.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/game/:id',
    name: 'GameDetail',
    component: GameDetailView,
    props: true  // allows passing route params as props
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
