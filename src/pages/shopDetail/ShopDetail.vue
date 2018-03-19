<template>
  <div class="shopDetail_page">
      <Header go-back="true"></Header>
      <section class="shopDetail">
            <section class="shopDetail_top">
                    <img :src="'http://localhost:3000/img/' + product_user.avatar" class="shopDetail_avatar" v-if="product_user.avatar">
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
      <footer class="shopDetail_footer">

      </footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { getProductDetail } from '@/service/api';

export default {
  data() {
      return {
          product_id: '',
          product_info: {},
          product_user: {},
      }
  },
  components: {
      Header,
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
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

    .shopDetail_page {
        padding-top: 1.95rem;
        background: #fff;
    }
    .shopDetail {
        padding: 0 .6rem;
        .shopDetail_top {
            display: flex;
            padding: .666667rem 0;
            border-bottom: .0625rem solid rgb(245,245,245);
            .shopDetail_avatar {
                display: inline-block;
                @include wh(2.5rem, 2.5rem);
                border-radius: 50%;
                vertical-align: middle;
                .shopDetail_avatar_svg{
                    background: #ffffff;
                    border-radius:50%;
                    @include wh(2.5rem,2.5rem);
                }
            }
            .shopDetail_name {
                margin-left: .48rem;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                p {
                    font-weight:700;
                    @include sc(.8rem,rgb(12, 2, 2));
                }
            }
        }
    }
    .shopDetail_content {
        display: flex;
        flex-direction: column;
        h2 {
            margin: .5rem 0;
            @include sc(1.3rem, rgb(255,59,48));
        }
        .shopDetail_description {
            width: 100%;
        }
    }
    .shopDetail_img {
        position: relative;
        padding-bottom: 100%;
        margin-top: .3rem;
        >img {
            position: absolute;
            @include wh(100%, 100%);
        }
    }
    .shopDetail_footer {
        background-color: #fff;
        position: fixed;
        z-index: 99;
        left: 0;
        right: 0;
        bottom: 0;
        @include wh(100%, 1.95rem);
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
    }
</style>


