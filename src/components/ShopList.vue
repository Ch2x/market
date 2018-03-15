<template>
    <div class="shop_container">
            <ul>
                <router-link :to="{path: '/shopDetail', query: {product_id: item.product_id}}" v-for="item in productLists" :key="item.product_id">
                    <li class="shop_li">
                    <section>
                        <img :src="item.images[0]" class="shop_img">
                    </section>
                    <hgroup class="shop_right">
                        <div class="shop_first">
                            <h4 class="shop_title ellipsis">{{item.title}}</h4>
                            <p class="shop_price">￥{{item.price}}</p>
                        </div>
                        <div class="shop_content ellipsis">{{item.description}}</div>
                        <div class="shop_data">{{item.releaseTime}}</div>
                    </hgroup>
                </li>
                </router-link>
            </ul>
        </div>
</template>

<script>
import { getProductLists } from '@/service/api';
export default {
  data() {
    return {
        productLists: [],
    };
  },
  props: ['sort'],
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let lists = await getProductLists(this.sort);
      this.productLists = lists;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/mixin";

.shop_container {
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
  object-fit: cover;
}
.shop_right {
  flex: auto;
  .shop_first {
    @include fj;
    align-items: center;
    .shop_title {
      width: 8.5rem;
      color: #333;
      padding-top: 0.01rem;
      @include font(0.65rem, 0.65rem, "PingFangSC-Regular");
      font-weight: 700;
    }
    .shop_price {
      color: rgb(230, 63, 63);
      padding-top: 0.01rem;
      @include font(0.9rem, 0.9rem, "PingFangSC-Regular");
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
