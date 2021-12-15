import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter)

  const routes = [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/stashes',
      name:  'Stashes',
      beforeEnter: authGuard,
      component: () => import('../views/Stashes.vue')
    },
    {
      path: '/initiative-cards',
      name: 'Initiative cards',
      component: () => import('../views/InitiativeCards.vue')
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes
})

export default router
