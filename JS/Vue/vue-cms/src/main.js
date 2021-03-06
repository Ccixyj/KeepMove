import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/api.js'
// mint ui css
import 'mint-ui/lib/style.css'
// mui css 注意顺序
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
// vant
import 'vant/lib/index.css'
import { Toast } from 'vant'
Vue.use(Toast)
Vue.config.productionTip = false
Vue.prototype.$api = api

Toast.setDefaultOptions({
  duration: 1200
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('init ok')
