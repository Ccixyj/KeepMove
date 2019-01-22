<template>
  <div id="home-news">
    <van-pull-refresh v-model="refreshing" @refresh="getNews">
      <van-list v-model="loading" :finished="finished" @load="getNews">
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
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import Vue from "vue";
import { Loading, Notify, PullRefresh, Cell, List } from "vant";
Vue.use(PullRefresh)
  .use(List)
  .use(Cell)
  .use(Notify)
  .use(Loading);

export default {
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      error: false,
      newsList: []
    };
  },
  methods: {
    getNews() {
      this.$api.get(
        "/home/news",
        null,
        r => {
          this.loading = false;
          this.refreshing = false;
          this.newsList = r.data;
          this.finished = true;
          console.log(this.newsList);
        },
        e => {
          this.error = true;
        }
      );
    }
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>

#home-news {
  margin-bottom: 50px;
  .van-pull-refresh {
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
        align-self: center;
        img {
          height: 100%;
          width: 100%;
          border-radius: 4px;
        
        }
        
      }

      span {
        color: #222c6c;
      }
    }
  }
}
</style>
