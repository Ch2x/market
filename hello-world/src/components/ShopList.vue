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
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="scroll">
                  <span v-show="loading">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-loading"></use>
                            </svg>
                    </span>
                </div>
          <section class="home_back" @click="backTop" v-if="showBackStatus">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-back"></use>
            </svg>
          </section>
        </div>
</template>

<script>
import { getProductLists } from '@/service/api';
import { animate, showBack } from '../config/mUtil';

export default {
  data() {
    return {
        productLists: [],
        busy: true,
        loading: false,
        pageSize: 8,
        page: 1,
        showBackStatus: false,
        sorting: 0,
    };
  },
  props: ['sort', 'sortType'],
  mounted() {
    this.init();
  },
  methods: {
    async init(flag, sorting) {
      this.loading = true;
      const result = await getProductLists(this.sort, this.page, this.pageSize, this.sorting);
      if(result.length) {
        if(flag) {
          this.productLists = this.productLists.concat(result);
        }else {
          this.productLists = result;
        }
        if(result.length < this.pageSize) {
          this.busy = true;
          this.loading = false;
        } else {
          this.busy = false;
        }
      } else {
        this.loading = false;
      }

      showBack((status) => {
				this.showBackStatus = status;
			});
    },
    async loadMore() {
      this.busy = true;
      const self = this;
      setTimeout(() => {
          self.page++;
          self.init(true);
      }, 500);
    },
    async listenChange() {
      switch(this.sortType) {
        case '0': 
          this.sorting = 0;
          break;
        case '1': 
          this.sorting = 1;
          break;
        case '2':
          this.sorting = 2;
          break;
        case '3':
          this.sorting = 3;
          break;
        default:
          this.sorting = 0;
          break;
      }
      this.page = 1;
      this.init();
    },
    backTop() {
      animate(document.documentElement, {scrollTop: '0'}, 400,'ease-out');
    }
  },
  watch: {
    sortType: function() {
      this.listenChange();
    }
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

.scroll {
    text-align: center;
    >span {
      display: inline-block;
      @include wh(1rem, 1rem);
      svg {
        @include wh(100%, 100%);
      }
    }
  }
  .home_back {
  background-color: rgba(128, 128, 128, .8);
  position: fixed;
  bottom: 2.1rem;
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
