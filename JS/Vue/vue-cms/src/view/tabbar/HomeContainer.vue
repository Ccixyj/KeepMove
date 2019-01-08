<template>
  <div class="home-container">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in items" :key="item.url">
        <img :src="item.image" alt srcset>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to='/home/news'>
          <img src="../../assets/images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu2.png">

          <div class="mui-media-body">图片专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu3.png">
          <div class="mui-media-body">数码购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu5.png">
          <div class="mui-media-body">视屏专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {},
  created() {
    this.$api.get("/home/lunbo", null, d => {
      this.items = d.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  .mint-swipe {
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .mui-grid-view {
    .mui-table-view-cell {
      img {
        width: 70%;
        height: 70%;
      }
    }
  }
}
</style>
