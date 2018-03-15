<template>
  <div class="shopDetail_page">
      <Header go-back="true"></Header>
      <section class="shopDetail">
            <section class="shopDetail_top">
                    <!-- <img src="../../assets/logo.png" class="shopDetail_avatar"> -->
                    <span class="shopDetail_avatar">
                        <svg class="shopDetail_avatar_svg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                        </svg>
                    </span>
                    <div class="shopDetail_name">
                        <h5>{{product_info.title}}</h5>
                        <p>发布于{{product_info.releaseTime}}</p>
                    </div>
            </section>
            <section class="shopDetail_content">
                <h2>{{product_info.price}}</h2>
                <div class="shopDetail_description"><span>{{product_info.description}}</span></div>
            </section>
            <section class="shopDetail_img">
                <img :src="item" v-for="(item, index) in product_info.images" :key="index">
            </section>
      </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { getProductDetail } from '@/service/api';

export default {
  data() {
      return {
          product_id: '',
          product_info: [],
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
          this.product_info = productDetail;
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
            @include sc(2rem, rgb(255,0,0));
        }
        .shopDetail_description {
            width: 100%;
        }
    }
    .shopDetail_img {
        >img {
            @include wh(100%, 15rem);
        }
    }
</style>


