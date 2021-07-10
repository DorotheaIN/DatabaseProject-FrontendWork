import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
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
=======
>>>>>>> dzy
import  DocList from '../views/listPage/docList.vue'
import  Navigation from '../components/Navigation.vue'
import online from '../views/listPage/online.vue'
import offline from '../views/listPage/offline.vue'
import mall from '../views/listPage/mall.vue'
import diseaseInfo from '../views/listPage/diseaseInfo.vue'
import Home from '../views/listPage/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Navigation',
    name: 'Navigation',
    component: Navigation
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/mall',
    name: 'mall',
    component: mall
  },
  {
    path: '/diseaseInfo',
    name: 'diseaseInfo',
    component: diseaseInfo
  },
 
  {
    path: '/online',
    name: 'online',
    component: online
  },
  {
    path: '/offline',
    name: 'offline',
    component: offline
  },
 
  {
    path: '/listPage/docList',
    name: 'DocList',
    component: DocList
<<<<<<< HEAD
  }
>>>>>>> dzy
=======
  },
>>>>>>> dzy
]

const router = new VueRouter({
  routes,
    mode: 'history'
})

export default router

