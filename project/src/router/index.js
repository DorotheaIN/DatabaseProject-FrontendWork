import Vue from 'vue'
import VueRouter from 'vue-router'
import Navigation from '../components/Navigation.vue'
import Home from '../views/Home.vue'
import doc_card from '../components/doc_card.vue'
import hos_card from '../components/hos_card.vue'
import Inquiry from '../views/Inquiry.vue'
import text_box from "../components/text_box";

Vue.use(VueRouter)

const routes = [
 {
   path:'/Navigation',
   component: Navigation
 },
 {
   path:'/Home',
   component:Home
 },
 {
   path:'/doc_card',
   component:doc_card
 },
 {
  path:'/hos_card',
  component:hos_card
},
    {
        path:'/Inquiry',
        component:Inquiry
    },
    {
        path:'/text_box',
        component:text_box
    },

]

const router = new VueRouter({
  routes
})

export default router
