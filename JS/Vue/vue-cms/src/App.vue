<template>
  <div id="app" class="app-container">
    <!-- <mt-header fixed title="这是app">
      <a @click.prevent="goBack"  slot="left" v-show="showBack">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>-->
    <van-nav-bar
      title="this app"
      :left-text="navBackTxt"
      :left-arrow="showBack"
      @click-left="goBack"
    />
    <!-- content -->
    <transition name="app-content">
      <router-view></router-view>
    </transition>
    <!-- //tab bar -->
    <!-- <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"  to="/home">标签</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="5" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Header, Button } from "mint-ui";

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

import { NavBar } from "vant";
import { Tabbar, TabbarItem } from "vant";
Vue.use(NavBar);
Vue.use(Tabbar).use(TabbarItem);

export default {
  computed: {
    showBack: function() {
      return !["/home", "/member", "/cart", "/search"].includes(
        this.$route.path
      );
    },
    navBackTxt() {
      return this.showBack ? "返回" : "";
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  created: function() {
    console.log("app created");
  },
  beforeUpdate: function() {
    console.log(
      "app route " + this.$route.path + ", length :" + window.history.length
    );
  }
};
</script>

<style lang="scss">
.app-container {
  margin-bottom: 50px;
  overflow-x: hidden;
}

.app-content-enter,
.app-content-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.app-content-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.app-content- enter-active,
.app-content- leave-active {
  transition: all 0.6s ease;
}
</style>
