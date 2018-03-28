<template>
  <div class="shopDetail_page">
      <Header go-back="true"></Header>
      <section class="shopDetail">
            <section class="shopDetail_top">
                    <img :src="'http://192.168.1.167:3000/img/' + product_user.avatar" class="shopDetail_avatar" v-if="product_user.avatar">
                    <span class="shopDetail_avatar" v-else>
                        <svg class="shopDetail_avatar_svg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                        </svg>
                    </span>
                    <div class="shopDetail_name">
                        <h5>{{product_user.userName}}</h5>
                        <p>发布于{{product_info.releaseTime}}</p>
                    </div>
            </section>
            <section class="shopDetail_content">
                <h2>￥{{product_info.price}}</h2>
                <div class="shopDetail_description"><span>{{product_info.description}}</span></div>
            </section>
            <section>
                <div v-for="(item, index) in product_info.images" :key="index" class="shopDetail_img">
                    <img :src="item">
                </div>
            </section>
      </section>
          <section class="shop_comment">
                <h5 class="shop_comment_title">
                    <span>留言</span>
                    <span>({{comment.length}})</span>
                </h5>
                <form class="comment_form">
                    <input type="text" name="text" :placeholder="replyUser" class="text_input" v-model="textValue" @blur="changeFocus(false)" v-focus="focusComment"  @click="checkLogin">
                    <input type="submit" name="submit" value="发送" class="text_submit" @click.prevent="sendComment">
                </form>
                <ul>
                  <li v-for="item in comment" :key="item.product_id" @click="replayComment(item.from_uid, item.from_name)">
                    <section class="shop_comment_item">
                    <div class="comment_detail">
                        <span>{{item.from_name}}</span>
                        <span v-if="item.to_name">回复 {{item.to_name}}</span>
                        :<span>{{item.content}}</span>
                    </div>
                  </section>
                  </li>
                </ul>
      </section>
      <footer class="shopDetail_footer">
          <section class="shopDetail_icon" @click="changeFocus(true)">
              <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-comment"></use>
              </svg>
              <span>留言</span>
          </section>
          <section class="shopDetail_type" v-if="showButton">
             <button @click="addCart" disabled="!addState">{{addState?'已加入购物车':'加入购物车'}}</button>
             <button>去结算</button>
          </section>
      </footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { getProductDetail, postComment, addCart, getAddState } from "@/service/api";
import { mapState } from 'Vuex';

export default {
  data() {
    return {
      product_id: "",
      product_info: {},
      product_user: {},
      textValue: '',
      focusComment: false,
      comment: [],
      replyId: '',
      replyUser: '看对眼就留言，问问更多细节',
      showButton: true,
      addState: false,
    };
  },
  directives: {
    focus: {
      // 指令的定义
        update: function (el, {value}) {
          if(value) {
            el.focus()
          }
        }
      }
  },
  computed: {
    ...mapState([
      'userInfo',
    ])
  },
  components: {
    Header
  },
  created() {
    this.product_id = this.$route.query.product_id;
    console.log(this.$route.query);
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let productDetail = await getProductDetail(this.product_id);
      this.product_info = productDetail.product;
      this.product_user = productDetail.userInfo;
      this.comment = productDetail.comment;
      if(this.product_info.user_id === this.userInfo.user_id) {
        this.showButton = false;
      } else {
        const result = await getAddState(this.userInfo.user_id, this.product_id);
        if(result.status === 1) {
          this.addState = true
          console.log(1);
        }
      }
    },
    async addCart() {
      if(!this.userInfo) {
        this.$router.push('/login');
        return;
      }
      const result = await addCart({
        product_id: this.product_id,
        user_id: this.userInfo.user_id,
      });
    },
    changeFocus(flag) {
      if(!this.userInfo) {
        this.$router.push('/login');
      }else {
        this.focusComment = flag;
        this.replyUser = '看对眼就留言，问问更多细节';
      }
    },
    async sendComment() {
      if(!this.userInfo) {
        this.$router.push('/login');
        return;
      }
      let result = await postComment(this.product_id, this.textValue, this.userInfo.user_id, this.replyId);
      if(result.status === 1) {
        console.log('评论成功');
        this.init();
      }
      this.replyId = '';
      this.textValue = '';
    },
    replayComment(to_uid, name) {
      if(!this.userInfo) {
        this.$router.push('/login');
        return;
      }
      if(to_uid === this.userInfo.user_id){
        this.replyId = '';
        return;
      } 
      this.replyUser = '回复@' + name;
      this.focusComment = true;
      this.replyId = to_uid;
    },
    checkLogin() {
      if(!this.userInfo) {
        this.$router.push('/login');
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

.shopDetail_page {
  padding: 1.95rem 0 2.3rem;
  
}
.shopDetail {
  background-color: #fff;
  padding: 0 0.6rem .6rem;
  .shopDetail_top {
    display: flex;
    padding: 0.666667rem 0;
    border-bottom: 0.0625rem solid rgb(245, 245, 245);
    .shopDetail_avatar {
      display: inline-block;
      @include wh(2.5rem, 2.5rem);
      border-radius: 50%;
      vertical-align: middle;
      .shopDetail_avatar_svg {
        background: #ffffff;
        border-radius: 50%;
        @include wh(2.5rem,2.5rem);
      }
    }
    .shopDetail_name {
      margin-left: 0.48rem;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      p {
        font-weight: 700;
        @include sc(0.8rem,rgb(12, 2, 2));
      }
    }
  }
}
.shopDetail_content {
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0.5rem 0;
    @include sc(1.3rem, rgb(255,59,48));
  }
  .shopDetail_description {
    width: 100%;
  }
}
.shopDetail_img {
  position: relative;
  padding-bottom: 100%;
  margin-top: 0.3rem;
  > img {
    position: absolute;
    @include wh(100%, 100%);
  }
}
.shopDetail_footer {
  display: flex;
  background-color: #fff;
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  @include wh(100%, 1.95rem);
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
  padding: 0 0.6rem;
  justify-content: space-between;
  align-items: center;
}
.shopDetail_icon {
  display: flex;
  @include wh(2.5rem, 100%);
  align-items: center;
  > svg {
    @include wh(0.9rem, 0.9rem);
  }
  > span {
    @include sc(0.6rem, #000);
  }
}

.shopDetail_type {
  >button {
    background-color: #4cd964;
            padding: .3rem .6rem;
            text-align: center;
            @include sc(.6rem, #fff);
            border-radius: 0.1rem;
            border: 1px;
  }
}

// 评论
.shop_comment {
    margin-top: .3rem;
    background-color: #fff;
    padding: 0 .6rem;
    .shop_comment_title {
        height: 1.8rem;
        line-height: 1.8rem;
        border-bottom: 0.0625rem solid rgb(245, 245, 245);
    }
    .shop_comment_item {
      display: flex;
      border-bottom: 0.0625rem solid rgb(245, 245, 245);
      padding: .3rem 0;
      font-size: .8rem;
    }
}
.comment_form {
  padding: .6rem 0;
  display: flex;
  input {
    height: 1.6rem;
  }
  .text_input {
    flex: 4;
    border-radius: .125rem;
    font-weight: bold;
    padding: 0 0.25rem;
    @include sc(0.65rem, #333);
    background-color: #f2f2f2;  
  }
  .text_submit {
    flex: 1;
    @include sc(0.65rem, #fff);
    border-radius: 0.125rem;
    background-color: #3190e8;
    font-weight: bold;
  }
}
</style>


