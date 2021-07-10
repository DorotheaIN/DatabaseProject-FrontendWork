import Vue from 'vue'
import VueRouter from 'vue-router'
import Navigation from '../components/Navigation.vue'
import Home from '../views/Home.vue'
import doc_card from '../components/doc_card.vue'
import hos_card from '../components/hos_card.vue'
import Inquiry from '../views/Inquiry.vue'
import text_box from "../components/text_box";
import medicalrecord_form from "../components/medicalrecord_form";
import tabs from "../components/tabs";
import inquiry_title from "../components/inquiry_title";
import inquiry_navigation from "../components/inquiry_navigation_patient";
import InquiryPatient from "../views/InquiryPatient";
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
  path:'/InquiryPatient',
  component:InquiryPatient
},
    {
        path:'/Inquiry',
        component:Inquiry
    },
    {
        path:'/text_box',
        component:text_box
    },
    {
        path:'/medicalrecord_form',
        component: medicalrecord_form
    },
    {
        path:'/tabs',
        component: tabs
    },
    {
        path:'/inquiry_title',
        component: inquiry_title
    },
    {
        path: '/inquiry_navigation',
        component: inquiry_navigation
    }
]

const router = new VueRouter({
  routes,
    mode: 'history'
})

export default router
