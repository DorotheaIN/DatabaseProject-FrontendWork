import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login'},
  { path: '/login',component: Login,meta:{title: '济病通-登录'} },
  { path: '/home',component: Home,meta:{title: '主页'}},
  { path: '/register', component: Register,meta:{title: '济病通-注册'} }
]

const router = new VueRouter({
  routes
})

/*
//挂载路由导航守卫
router.beforeEach((to,from,next)=> {
  //to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next 是一个函数，表示放行
  //next()放行 next('/login)强制跳转
  if(to.path==='/login') return next();
  const tokenStr=window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
*/

export default router
