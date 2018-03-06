<template>
    <div class="home_page paddingTop">
        <Header head-title="首页"></Header>
        <div>
            <router-link :to="'/search'" class="link_search">
                <input type="search" name="search" placeholder="请输入" class="input_search">
            </router-link>
        </div>
        <div>
            <swiper :options="swiperOption" class="home_swiper">
                <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
                    <img :src="'/static/'+item.image_path">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="shop_container">
            <ul>
                <li class="shop_li" v-for="(item, index) in shopList" :key="index">
                    <section>
                        <img src="../../assets/logo.png" class="shop_img">
                    </section>
                    <hgroup class="shop_right">
                        <div class="shop_first">
                            <h4 class="shop_title ellipsis">{{item.title}}</h4>
                            <p class="shop_price">${{item.price}}</p>
                        </div>
                        <div class="shop_content ellipsis">{{item.content}}</div>
                        <div class="shop_data">{{item.data}}</div>
                    </hgroup>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [
          {
              image_path: '1.jpg'
          },
          {
              image_path: '1.jpg'
          },
          {
              image_path: '1.jpg'
          },
      ],
      shopList: [
          {
              title: '二手买卖',
              price: 1000,
              content: '简要简要简要简要简要简要简要简要简要简要简要简要简要简要',
              data: '2018年',
          }, 
          {
              title: '二手买卖',
              price: 1000,
              content: '简要简要简要简要简要简要简要简要简要简要简要简要',
              data: '2018年',
          },
          {
              title: '二手买卖',
              price: 1000,
              content: '简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要',
              data: '2018年',
          },
          {
              title: '二手买卖',
              price: 1000,
              content: '简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要',
              data: '2018年',
          },
          {
              title: '二手买卖',
              price: 1000,
              content: '简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要',
              data: '2018年',
          },
          {
              title: '二手买卖',
              price: 1000,
              content: '简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要简要',
              data: '2018年',
          },
      ]
    };
  },
  components: {
    Header,
    Footer,
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

.link_search {
  background-color: #fff;
  padding: 0.5rem;
  display: flex;
  .input_search {
    flex: 4;
    border: 0.025rem solid #e4e4e4;
    @include sc(0.65rem, #333);
    border-radius: 0.125rem;
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 0 0.25rem;
  }
}
.home_swiper {
    @include wh(100%, 8rem);
}
.shop_container{
		background-color: #fff;
		margin-bottom: 2rem;
}
.shop_li {
	display: flex;
	border-bottom: 0.025rem solid #f1f1f1;
	padding: 0.7rem 0.4rem;
}
.shop_img {
    @include wh(2.7rem, 2.7rem);
	display: block;
	margin-right: 0.4rem;
}
.shop_right {
    flex: auto;
    .shop_first {
        @include fj;
        align-items: center;
        .shop_title {
            width: 8.5rem;
			color: #333;
            padding-top: .01rem;
			@include font(0.65rem, 0.65rem, 'PingFangSC-Regular');
			font-weight: 700;
        }
        .shop_price {
			color: rgb(230, 63, 63);
            padding-top: .01rem;
			@include font(0.9rem, 0.9rem, 'PingFangSC-Regular');
			font-weight: 700;
        }
    }
    .shop_content {
        width: 12rem;
		margin-left: -0.2rem;
	    @include sc(0.4rem, #666);
    }
    .shop_data {
		@include sc(0.5rem, #666);
    }
}
</style>
