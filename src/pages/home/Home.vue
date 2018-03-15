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
        <ShopList></ShopList>
        <Footer></Footer>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopList from "@/components/ShopList";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getProductLists } from "@/service/api";

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
          image_path: "1.jpg"
        },
        {
          image_path: "1.jpg"
        },
        {
          image_path: "1.jpg"
        }
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
  mounted() {
    this.init();
  },

  methods: {
    async init() {
      let lists = await getProductLists();
      console.log(lists, 1);
      this.productLists = lists;
    }
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
</style>
