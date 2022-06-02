import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/tabla',
    name: 'tabla',
    component: () => import(/* webpackChunkName: "about" */ '../views/TablaView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
