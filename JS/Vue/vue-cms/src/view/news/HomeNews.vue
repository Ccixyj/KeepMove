<template>
  <div id="home-news">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item) in newsList" :key="item.id">
        <router-link  :to="'/home/news/'+item.id">
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
export default {
data() {
  return {
    newsList:[]
  }
},
methods:{
  getNews(){
    this.$api.get("/home/news",null,r=>{
      this.newsList =  r.data
      console.log(this.newsList);
    })
  }
},
  created(){
    this.getNews()
  }
};
</script>

<style lang="scss" scoped>
#home-news {
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
