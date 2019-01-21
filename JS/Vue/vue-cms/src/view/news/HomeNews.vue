<template>
  <div id="home-news">
    <van-pull-refresh v-model="isLoading" @refresh="getNews">
      <van-cell v-for="(item) in newsList" :key="item.id" border clickable>
        <div slot="icon" class="image-holder">
          <img :src="item.image">
        </div>

        <div slot="title" class="cell-title">
          <h3 class="title">{{item.title}} {{item.title}}</h3>
          <div class="ellipsis">
            <span>{{item.date}}</span>
            <span>浏览 {{item.click}} 次</span>
          </div>
        </div>
      </van-cell>
    </van-pull-refresh>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item) in newsList" :key="item.id">
        <router-link :to="'/home/news/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.image">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>{{item.date}}</span>
              <span>浏览 {{item.click}} 次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Loading, Notify, PullRefresh, Cell } from "vant";
Vue.use(PullRefresh)
  .use(Cell)
  .use(Notify)
  .use(Loading);

export default {
  data() {
    return {
      isLoading: true,
      newsList: []
    };
  },
  methods: {
    getNews() {
      this.isLoading = true;
      this.$api.get("/home/news", null, r => {
        this.newsList = r.data;
        this.isLoading = false;
        console.log(this.newsList);
      });
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style lang="scss" scoped>
#home-news {
  .van-pull-refresh {
    &,
    &__track {
      height: calc(100vh - 50px - 46px);
    }
    .van-cell {
      height: auto;
      max-height: 120px;

      .cell-title {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          margin: 0px;
          font-size: 16px;
          line-height: 24px;
          color: #222;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
        .ellipsis {
          color: #222c6c;
          font-size: 12px;
          display: flex;
          justify-content: space-between;
        }
      }
      .image-holder {
        margin-right: 10px;
        width: 25%;
        height: 100%;
        display: inline-block;
        vertical-align: middle;
        img {
          height: 100%;
          width: 100%;
          border-radius: 4px;
        }
        img:after {
          content: "12222444 ";
          display: block;
          height: 100%;
        }
      }

      span {
        color: #222c6c;
      }
    }
  }

  li {
    h1 {
      font-size: 18px;
      color: #222;
    }
    .mui-ellipsis {
      color: #222c6c;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
