import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
import Inquiry from '../views/Inquiry.vue'
Vue.use(VueRouter)

const routes = [
 {
    path:'/Home',
    component:Home
 },
 {
    path:'/Inquiry',
    component:Inquiry
 },
=======
import Test from '../views/Test.vue'
import  DocList from '../views/listPage/docList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/listPage/docList',
    name: 'DocList',
    component: DocList
  }
>>>>>>> dzy
]

const router = new VueRouter({
  routes,
    mode: 'history'
})

export default router

