<template>
  <div class="sortList_page">
    <Header :head-title="sortName" go-back="true"></Header>
    <div class="sort_btn">
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
    <ShopList :sort="sort_id" :sortType="sortType"></ShopList>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ShopList from "@/components/ShopList";
export default {
  data() {
    return {
      sort_id: 0,
      sortName: "",
      sortFilter: false,
      dataType: "0",
      typeList: ["综合排序", "价格从低到高", "价格从高到低", "最新发布"],
      sortType: ""
    };
  },
  components: {
    Header,
    ShopList
  },
  created() {
    this.sort_id = this.$route.query.sort_id;
    this.sortName = this.$route.query.sortName;
    console.log(this.$route.query.sort_id);
  },
  methods: {
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
      this.sortType = this.dataType;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

.sortList_page {
  padding-top: 1.95rem;
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

