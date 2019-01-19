import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/tabbar/HomeContainer.vue'
import Member from './view/tabbar/MemberContainer.vue'
import Search from './view/tabbar/SearchContainer.vue'
import Cart from './view/tabbar/ShopCartContainer.vue'
import HomeNews from './view/news/HomeNews.vue'
import HomeNewsInfo from './view/news/HomeNewsInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/member',
    component: Member
  },

  {
    path: '/search',
    component: Search
  },

  {
    path: '/cart',
    component: Cart
  },

  {
    path: '/home/news',
    component: HomeNews
  },
  {
    path: '/home/news/:id',
    component: HomeNewsInfo
  },
]
})
