import Vue from 'vue'
import { Button,Form,FormItem,Input,Icon,Tabs,TabPane,Message } from 'element-ui' 

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.prototype.$message=Message //每一个this都能访问到$message