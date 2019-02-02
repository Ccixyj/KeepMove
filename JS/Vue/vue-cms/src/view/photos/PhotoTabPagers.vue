<template>
  <div id="home-photos">
    <van-tabs v-model="active" swipeable animated :ellipsis="false" @change="getImgs">
      <van-tab v-for="(data ) in cate" :title="data.name" :key="data.id">
        <ul>
          <li v-for="(item) in allImgs[data.id]" :key="item.cid" >
            <!-- :src="item.turl" -->
            <img v-lazy="item.turl"  alt>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs, Lazyload } from "vant";
import Vue from "vue";
Vue.use(Tab)
  .use(Tabs)
  .use(Lazyload);
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
          this.getImgs(this.active)
        },
        e => {
          this.$toast.fail("加载失败!");
        }
      );
    },

    getImgs(index, title) {
      console.log("chane index" + index);
      let cate = this.cate[index];
      if (!this.allImgs[cate.id] || !(this.allImgs[cate.id].length <= 0)) {
        this.$api.get(
          `/photos/images/${cate.id}`,
          null,
          r => {
            this.$nextTick(function(){
              Vue.set( this.allImgs ,cate.id , r.data)
              //  this.allImgs[cate.id] = r.data;
            })
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
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
