import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
]

const router = new VueRouter({
  routes,
    mode: 'history'
})

export default router
