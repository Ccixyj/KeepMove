<template>
  <div id="home-news">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;" class>
          <img class="mui-media-object mui-pull-left" src="../../assets/logo.png">
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>时间:121212</span>
              <span>浏览0次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
