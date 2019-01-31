<template>
  <div id="detail">
    <div class="title">新闻详情- {{$route.params.id}}</div>
    <div class="sub-info">
      <span>发表时间: {{newInfo.date}}</span>
      <span>点击: {{newInfo.click}}次</span>
    </div>
    <!-- 内容 -->
    <div class="content" v-html="newInfo.content"></div>
    <!-- 评论区域 -->
    <comment-box :id="this.newInfo.id" v-if="this.newInfo.id"></comment-box>
  </div>
</template>

<script>
import cmt from "../../components/CommentAndList.vue";
export default {
  data() {
    return {
      newInfo: {}
    };
  },
  created() {
    this.$api.get("/home/news/" + this.$route.params.id, null, r => {
      this.newInfo = r.data;
    });
  },
  components: {
    "comment-box": cmt
  }
};
</script>

<style lang="scss" scoped>
#detail {
  padding: 0px 12px;
  .title {
    line-height: 40px;
    font-size: 18px;
    max-lines: 1;
    text-align: center;
    margin: 8px;
  }
  .sub-info {
    display: flex;
    color: blue;
    font-size: 12px;
    justify-content: space-between;
  }

  .content {
    overflow: hidden;
  }
}
</style>

