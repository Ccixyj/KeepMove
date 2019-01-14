<template>
  <div id="comment">
    <h3>评论列表</h3>
    <hr>
    <textarea maxlength="120" placeholder="最多输入10字"></textarea>
    <mt-button type="primary" size="large">发布评论</mt-button>
    <div class="comment-list">
      <div class="comment-item">
        <div class="comment-title">发表用户:匿名</div>
        <div class="comment-body">nihc ac cwdwdwdwddwd</div>
      </div>
       <div class="comment-item">
        <div class="comment-title">发表用户:匿名</div>
        <div class="comment-body">nihc ac cwdwdwdwddwd</div>
      </div>
       <div class="comment-item">
        <div class="comment-title">发表用户:匿名</div>
        <div class="comment-body">nihc ac cwdwdwdwddwd</div>
      </div>
      <mt-button type="danger" plain size="large">加载更多</mt-button>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Button } from "mint-ui";
Vue.component(Button.name, Button);

export default {};
</script>

<style lang="scss" scoped>
#comment {
  h3 {
    font-size: 18px;
  }

  textarea {
    height: 88px;
    font-size: 14px;
    margin: 0;
  }

  .comment-list {
    margin: 8px 0px;
    .comment-item {
      .comment-title {
        font-size: 13px;
        background-color: #ccc;
        line-height: 30px;
      }

      .comment-body {
        text-indent: 2em;
        font-size: 14px;
        line-height: 40px;
      }
    }
  }
}
</style>

