<template>
  <div id="home-photos">
    <van-tabs v-model="active" swipeable animated :ellipsis="false" @change="getImgs">
      <van-tab v-for="(data ) in cate" :title="data.name" :key="data.id">
        <ul>
          <li v-for="(item) in allImgs[data.id]" :key="item.cid">
            <!-- <lazy-component>
              <img :src="item.turl" alt>
            </lazy-component>-->
            <img v-lazy="item.turl" data-loading="../../assets/images/loading.gif">
            <div class="info">{{item.t}}</div>
            <!-- <lazy-component @show="handler">
              <img :src="item.turl" width="100%" height="100%">
            </lazy-component>-->
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
// import { Lazyload } from "vant";
// Vue.use(Lazyload, {
//   lazyComponent: true
// });
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  lazyComponent: true
});

Vue.use(Tab).use(Tabs);

export default {
  data() {
    return {
      active: 0,
      cate: [],
      allImgs: {}
    };
  },
  methods: {
    getCates() {
      this.$api.get(
        "/photos/category",
        null,
        r => {
          this.cate = r.data;
          this.getImgs(this.active);
        },
        e => {
          this.$toast.fail("加载失败!");
        }
      );
    },

    getImgs(index, title) {
      let cate = this.cate[index];
      if (!this.allImgs[cate.id] || !(this.allImgs[cate.id].length <= 0)) {
        this.$api.get(
          `/photos/images/${cate.id}`,
          null,
          r => {
            this.$nextTick(function() {
              this.$set(this.allImgs, cate.id, r.data);
              //  this.allImgs[cate.id] = r.data;
            });
          },
          e => {
            this.$toast.fail("加载失败!");
          }
        );
      }
    }
  },
  created() {
    this.getCates();
  },
  beforeMount() {
    console.log("beforeMount");
  },
  watch: {
    // active: function loadImghs(newVal, oldVal) {
    //   console.log(`old ${oldVal} new ${newVal}`);
    //   let id = this.cate[newVal].id;
    //   if (!this.allImgs[id]) {
    //     this.getImgs(newVal);
    //   }
    // }
  }
};
</script>

<style scoped lang="scss">
#home-photos {
  ul {
    background-color: #fff;
    li {
      margin-bottom: 10px;
      margin-left: 4px;
      margin-right: 4px;
      position: relative;
      img {
        height: 100%;
        width: 100%;
        border-radius: 8px;
        box-shadow:  0 1px 3px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
      }
      .info {
        padding: 4x;
        position: absolute;
        width: 100%;
        bottom: 4px;
        background-color: rgba(0, 0, 0, 0.4);
        font-size: 14px;
        color: #fff;
        text-align: left;
        max-height: 84px;
      }
    }
  }
}
</style>
