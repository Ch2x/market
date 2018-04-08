<template>
  <div class="paddingTop search_page">
      <Header go-back='true' head-title="搜索"></Header>
      <form class="search_form">
            <input type="search" name="search" placeholder="请输入商品名称" class="search_input" v-model="searchValue">
            <input type="submit" name="submit" class="search_submit" @click.prevent="submit">
      </form>
      <section>
          <ul class="search_list">
                <router-link :to="{path: '/shopDetail', query: {product_id: item.product_id}}" v-for="item in searchList" :key="item.product_id" class="search_item">
                    <li>
                        <div class="search_item_img">
                            <img :src="item.images[0]">
                        </div>
                        <h5 class="search_title">{{item.title}}</h5>
                        <div>
                            <span>￥{{item.price}}</span>
                        </div>
                    </li>
                </router-link>
          </ul>
      </section>
      <div class="tipFind" v-if="showResult">未找到相关产品或者内容</div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { searchProduct } from "@/service/api";


export default {
  data() {
    return {
      searchValue: "",
      searchList: [],
      showResult: false,
    };
  },
  components: {
    Header
  },
  methods: {
    async submit() {
      this.searchList = [];
      if(!this.searchValue) {
        return;
      }
      const result = await searchProduct({ searchValue: this.searchValue });
      if(result.length === 0 ) {
        this.showResult = true;
      } else {
        this.showResult = false;
        this.searchList = result;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

.search_form {
  background-color: #fff;
  padding: 0.5rem;
  display: flex;
  input {
    height: 1.5rem;
  }
  .search_input {
    flex: 4;
    border: 0.025rem solid #e4e4e4;
    @include sc(0.65rem, #333);
    border-radius: 0.125rem;
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 0 0.25rem;
  }
  .search_submit {
    flex: 1;
    border: 0.025rem solid #3190e8;
    margin-left: 0.2rem;
    @include sc(0.65rem, #fff);
    border-radius: 0.125rem;
    background-color: #3190e8;
    font-weight: bold;
    padding: 0 0.25rem;
  }
}
.search_list {
  display: flex;
  flex-wrap: wrap;
  .search_item {
    width: 50%;
    padding: 0.1rem;
    .search_item_img {
      padding-bottom: 100%;
      position: relative;
      > img {
        position: absolute;
        @include wh(100%, 100%);
      }
    }
    .search_title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
         @include sc(.9rem, rgb(230, 63, 63));
    }
  }
}
.tipFind {
  padding-top: 1.8rem;
  text-align: center;
}
</style>

