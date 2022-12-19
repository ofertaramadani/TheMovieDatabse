import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomePage from '../views/Search.vue'
import SingleMovie from '../views/SingleMovie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/search',
    name:'homepage',
    component:HomePage
  },
  {
    path: '/single-movie/:id',
    name: 'single-movie',
    component: SingleMovie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
