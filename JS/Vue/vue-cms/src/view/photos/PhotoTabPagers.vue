<template>
  <div id="home-photos">
    <van-tabs v-model="active" swipeable animated  ellipsis=false>
      <van-tab v-for="(title , index) in cate" :title="title" :key="title">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
import Vue from "vue";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active:0,
      cate: []
    };
  },
  methods: {
    getCates(){
      this.$api.get("/photos/category",null,r =>{
          this.cate = r.data
      },e => {
        this.$toast.fail("加载失败!")
      })
    }
  },
  created() {
    this.getCates()
  }
};
</script>

<style>
</style>
