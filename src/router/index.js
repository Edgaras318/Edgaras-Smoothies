import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import AddSmoothie from '../views/AddSmoothie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/add-smoothie',
    name: 'AddSmoothie',
    component: AddSmoothie
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
