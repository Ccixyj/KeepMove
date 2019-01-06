<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in items" :key="item.url">
        <img :src="item.image" alt srcset>
      </mt-swipe-item>
    </mt-swipe>
    <h1>this is home</h1>
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
.mint-swipe {
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
