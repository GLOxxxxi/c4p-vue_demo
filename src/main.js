import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
/* router 路由 请求地址管理 */
import router from './router'
/* element ui 前端组件 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* 添加bootstrap框架 */
// import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
/* 提供axios请求 */
import axios from 'axios'
/* 提供jQuery库 */
import $ from 'jquery' ;
import VueNeo4j from 'vue-neo4j'
import store from './store'
import Neovis from 'neovis.js'
/* 添加自适应js */
import './utils/flexible'
// const echarts = require("echarts")

// 引入echarts


Vue.prototype.$echarts = echarts
// Vue.use($)
Vue.config.productionTip = false
/* 允许跨域携带cookie */
axios.defaults.withCredentials = true
/* element ui */
Vue.use(ElementUI)

Vue.use(VueNeo4j)
/* bootstrap */
// Vue.use(bootstrap)
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 设置导航守卫
router.beforeEach((to, from, next) =>{
  window.document.title = to.meta.title === undefined ? '默认标题' : to.meta.title
  if(to.meta.requireAuth) {
    let token = Cookies.get('access_token');
    let anonymous = Cookies.get('user_name');
    if(token) {
      next({
        path:'/',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
  next();
})