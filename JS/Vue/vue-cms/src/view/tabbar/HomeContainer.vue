<template>
  <!--  -->
  <div class="home-container">
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item , index) in items" :key="index + item.url">
        <img :src="item.image" alt srcset>
      </mt-swipe-item>
    </mt-swipe>-->
    <van-loading v-if="items.length <= 0" color="#4D6BFF"/>
    <van-swipe v-else :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item ) in items" :key="item.url">
        <img v-lazy="item.image">
      </van-swipe-item>
    </van-swipe>

    <div class="center-grid">
      <van-row type="flex" justify="space-around">
        <van-col span="6">
          <router-link to="/home/news">
            <img src="../../assets/images/menu1.png">
            <div class="col-text">新闻资讯</div>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/home/photos">
            <img src="../../assets/images/menu2.png">

            <div class="col-text">图片专区</div>
          </router-link>
        </van-col>
        <van-col span="6">
          <a href="#">
            <img src="../../assets/images/menu3.png">
            <div class="col-text">数码购买</div>
          </a>
        </van-col>
        <van-col span="6">
          <a href="#">
            <img src="../../assets/images/menu4.png">
            <div class="col-text">留言反馈</div>
          </a>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="6">
          <a href="#">
            <img src="../../assets/images/menu5.png">
            <div class="col-text">视屏专区</div>
          </a>
        </van-col>
        <van-col span="6">
          <a href="#">
            <img src="../../assets/images/menu6.png">
            <div class="col-text">联系我们</div>
          </a>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import {
  Row,
  Col,
  Loading,
  Swipe,
  SwipeItem,
  Lazyload,
  Toast,
  Notify
} from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Row)
  .use(Col)
  .use(Lazyload)
  .use(Toast)
  .use(Notify)
  .use(Loading);
Notify.setDefaultOptions({
  duration: 1000,
  background: "#4D6BFF"
});
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
      this.$notify({ message: "首页加载成功" });
    });
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  .van-loading {
    height: 200px;
    margin: 0 auto;
  }

  .van-swipe {
    height: 200px;

    img {
      width: 100%;
      height: 200px;
      display: block;
      pointer-events: none;
    }
  }

  .center-grid {
    padding-top: 16px;
    .van-row {
      padding: 8px 0;

      .van-col {
        text-align: center;
        font-size: 14px;

        img {
          width: 60px;
          height: 60px;
        }
        .col-text {
          color: #333;
        }
      }
    }
  }
}
</style>
