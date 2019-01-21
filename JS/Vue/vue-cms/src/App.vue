<template>
  <div id="app" class="app-container">
    <van-nav-bar
      title="this app"
      :left-text="navBackTxt"
      :left-arrow="showBack"
      @click-left="goBack"
    />
    <!-- content -->
    <transition name="app-content">
      <router-view></router-view>
      <!-- <keep-alive>
      </keep-alive> -->
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">标签</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="5" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";

import { NavBar ,Tabbar, TabbarItem } from "vant";
Vue.use(NavBar).use(Tabbar).use(TabbarItem);

export default {
  data() {
    return {
      active: 0
    };
  },
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
