<template>
    <div class="home_page paddingTop">
        <Header head-title="校园电子商务系统"></Header>
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
        <ShopList></ShopList>
        <Footer></Footer>
        <router-link v-if="userInfo" to="/shopCart">
          <section class="home_cart">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
          </svg>
        </section>
        </router-link>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopList from "@/components/ShopList";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getProductLists } from "@/service/api";
import { mapState } from 'vuex';

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
          image_path: "bg.png"
        },
        {
          image_path: "bg2.png"
        },
      ],
      productLists: []
    };
  },
  components: {
    Header,
    Footer,
    swiper,
    swiperSlide,
    ShopList
  },
  computed: {
    ...mapState([
      'userInfo',
    ])
  },
  mounted() {
    this.init();
  },

  methods: {
    async init() {
      
    },
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
  img {
    @include wh(100%, 100%);
  }
}
.home_cart {
  background-color: #FFF;
  position: fixed;
  bottom: 4rem;
  right: .8rem;
  border-radius: 50%;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
  @include wh(1.8rem, 1.8rem);
  display: flex;
  justify-content: center;
  align-items: center;
  >svg {
    @include wh(60%, 60%);
  }
}

</style>
