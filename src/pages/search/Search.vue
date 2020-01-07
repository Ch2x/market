<template>
  <div class="paddingTop search_page">
    <Header go-back="true" head-title="搜索"></Header>
    <form class="search_form">
      <input
        type="search"
        name="search"
        placeholder="请输入商品名称"
        class="search_input"
        v-model="searchValue"
      />
      <input type="submit" name="submit" class="search_submit" @click.prevent="submit" />
    </form>
    <div class="sort_btn" v-if="searchList.length>0">
      <div class="sort_item">
        <div class="sort_name" @click="showFilter">
          <span>{{typeList[dataType]}}</span>
          <svg
            width="10"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="sort_icon"
          >
            <polygon points="0,3 10,3 5,8" />
          </svg>
        </div>
        <section class="sort_choose" v-show="sortFilter">
          <ul @click="chooseList($event)">
            <li class="choose_item" v-for="(item, index) in typeList" :key="index" :data="index">
              <span :class="{choose_color: dataType == index}">{{item}}</span>
              <svg v-if="dataType==index">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected" />
              </svg>
            </li>
          </ul>
        </section>
      </div>
    </div>
    <section>
      <ul class="search_list">
        <router-link
          :to="{path: '/shopDetail', query: {product_id: item.product_id}}"
          v-for="item in searchList"
          :key="item.product_id"
          class="search_item"
        >
          <li>
            <div class="search_item_img">
              <img :src="item.images[0]" />
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
      sortName: "",
      sortFilter: false,
      dataType: "0",
      typeList: ["综合排序", "价格从低到高", "价格从高到低", "最新发布"],
      sortType: "",
      sourceList: []
    };
  },
  components: {
    Header
  },
  methods: {
    async submit() {
      this.searchList = [];
      this.dataType = 0;
      if (!this.searchValue) {
        return;
      }
      const result = await searchProduct({ searchValue: this.searchValue });
      if (result.length === 0) {
        this.showResult = true;
      } else {
        this.showResult = false;
        this.searchList = result;
        this.sourceList = result;
      }
    },
    showFilter() {
      this.sortFilter = !this.sortFilter;
    },
    chooseList(event) {
      let node;
      console.log(event.target.nodeName.toUpperCase());
      if (event.target.nodeName.toUpperCase() !== "LI") {
        node = event.target.parentNode;
      } else {
        node = event.target;
      }
      this.dataType = node.getAttribute("data");
      console.log(this.dataType);
      this.sortFilter = !this.sortFilter;
      if (this.dataType == 0) {
        this.searchList = this.sourceList;
      } else if (this.dataType == 1) {
        this.searchList.sort((a, b) => a.price - b.price);
      } else if (this.dataType == 2) {
        this.searchList.sort((a, b) => b.price - a.price);
      } else if (this.dataType == 3) {
        this.searchList.sort((a, b) => a.releaseTime - b.releaseTime);
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
      @include sc(0.9rem, rgb(230, 63, 63));
    }
  }
}
.tipFind {
  padding-top: 1.8rem;
  text-align: center;
}
.sort_btn {
  padding: 0.2rem 0;
  font-size: 0.66rem;
  background-color: #fff;
  border-bottom: 0.025rem solid #f1f1f1;
  position: relative;
  .sort_item {
  }
}

.sort_name {
  padding: 0 0.6rem;
  > span {
    display: inline-block;
    width: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.sort_choose {
  width: 100%;
  position: absolute;
  background-color: #fff;
  z-index: 99;
  li {
    padding: 0.6rem 0.6rem;
  }
}
.choose_item {
  display: flex;
  justify-content: space-between;
  .choose_color {
    color: blue;
  }
  > svg {
    @include wh(0.6rem, 0.6rem);
  }
}
</style>

