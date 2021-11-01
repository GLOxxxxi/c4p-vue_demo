import Vue from 'vue'
import App from './App.vue'
/* router 路由 请求地址管理 */
import router from './router'
/* element ui 前端组件 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/* 提供axios请求 */
import axios from 'axios'

import store from './store'

/* 添加自适应js */
import './utils/flexible'

Vue.config.productionTip = false
/* 允许跨域携带cookie */
axios.defaults.withCredentials = true
/* element ui */
Vue.use(ElementUI)
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