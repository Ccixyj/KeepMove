<template>
  <div id="app" class="app-container">
    <mt-header fixed title="固定在顶部"></mt-header>

    <!-- content -->
    <router-view></router-view>

    <!-- //tab bar -->
    <nav class="mui-bar mui-bar-tab">
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
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
import { Header, Swipe, SwipeItem } from "mint-ui";

Vue.component(Header.name, Header);


export default {
  created: function() {
    console.log("app created");
  }
};
</script>

<style lang="scss">
.app-container {
  padding-top: 40px;
}
</style>
