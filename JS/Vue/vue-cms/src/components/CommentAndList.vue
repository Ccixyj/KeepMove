<template>
  <div id="comment">
    <h3>评论列表</h3>
    <hr>
    <textarea maxlength="120" placeholder="最多输入10字" v-model="comment"></textarea>
    <mt-button type="primary" size="large" @click="post">发布评论</mt-button>
    <div class="comment-list">
      <div class="comment-item" v-for="(item , index) in page.data" :key="item.id">
        <div
          class="comment-title"
        >第{{index + 1}}条 &nbsp; &nbsp;用户:{{item.userName || "匿名用户"}} &nbsp; &nbsp; 发表时间:{{item.date}}</div>
        <div class="comment-body">{{item.comment}}</div>
      </div>
      <mt-button type="danger" plain size="large" @click="next" v-if="!page.isLast">加载更多</mt-button>
      <div class="end" v-else>已加载全部</div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Button, Toast } from "mint-ui";
Vue.component(Button.name, Button);

export default {
  data() {
    return {
      comment: "",
      page: {
        current: 1,
        pageSize: 10,
        isLast: false,
        data: []
      }
    };
  },
  props: ["id"],
  methods: {
    next() {
      this.getCommentsList({
        page: this.page.current + 1,
        pageSize: this.page.pageSize
      });
    },
    getCommentsList(pageReq) {
      this.$api.get(
        `/comment/${this.id}`,
        pageReq,
        r => {
          let d = this.page.data;
          this.page = r.data;
          this.page.data = d.concat(this.page.data);
        },
        e => {
          Toast("加载评论失败!");
        }
      );
    },
    post() {
      if (this.comment.trim().length > 0) {
        console.log("could post");
        this.$api.post(
          `/comment/post`,
          {
            id: this.id,
            comment: this.comment
          },
          r => {
            this.comment = "";
            this.page.data.unshift(r.data)
            Toast(`发布评论成功!`);
          },
          e => {
            Toast(`发布评论失败,${e.msg}`);
          }
        );
      } else {
        console.log("could not post");
        Toast("评论不能为空!");
      }
    }
  },
  created() {
    this.getCommentsList();
  }
};
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
        font-size: 12px;
        background-color: #ccc;
        line-height: 30px;
      }

      .comment-body {
        word-break: break-all;
        margin: 8px 0;
        font-size: 14px;
        color: #333;
      }
    }
    .end {
      font-size: 12px;
      color: #aaa;
      text-align: center;
      line-height: 24px;
    }
  }
}
</style>

