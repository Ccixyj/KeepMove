import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//mint ui css
import 'mint-ui/lib/style.css'
//mui css 注意顺序
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log("init ok");