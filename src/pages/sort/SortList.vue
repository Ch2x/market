<template>
    <div class="sortList_page">
        <Header :head-title="sortName" go-back="true"></Header>
        <div class="sort_btn">
            <div class="sort_item">
                <div class="sort_name" @click="showFilter">
                    <span>{{typeList[dataType]}}</span>
                    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
			    		<polygon points="0,3 10,3 5,8"/>
			    	</svg>
                </div>
                <section class="sort_choose" v-show="sortFilter">
                    <ul @click="chooseList($event)">
                        <li class="choose_item" v-for="(item, index) in typeList" :key="index" :data='index'>
                            <span :class="{choose_color: dataType == index}">{{item}}</span>
                            <svg v-if="dataType==index">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
							</svg>
                        </li>
                        <!-- <li class="choose_item" data='0'>
                            <span :class="{choose_color: dataType == 0}">综合排序</span>
                            <svg v-if="dataType==0">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
							</svg>
                        </li>
                        <li class="choose_item" data='1'>
                            <span :class="{choose_color: dataType == 1}">价格从低到高</span>
                            <svg v-if="dataType==1">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
							</svg>
                        </li>
                        <li class="choose_item" data='2'>
                            <span :class="{choose_color: dataType == 2}">价格从低到高</span>
                            <svg v-if="dataType==2">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
							</svg>
                        </li>
                        <li class="choose_item" data='3'>
                            <span :class="{choose_color: dataType == 3}">最新发布</span>
                            <svg v-if="dataType==3">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
							</svg>
                        </li> -->
                    </ul>
                </section>
            </div>
        </div>
        <ShopList :sort='sortName' :sortType='sortType'></ShopList>
    </div>
</template>

<script>
import Header from '@/components/Header';
import ShopList from '@/components/ShopList';
export default {
  data() {
      return {
          sortName: "",
          sortFilter: false,
          dataType: '0',
          typeList: ['综合排序', '价格从低到高', '价格从高到低', '最新发布'],
          sortType: '',
      }
  },
  components: {
      Header,
      ShopList,
  },
  created() {
      this.sortName = this.$route.query.name;
  },
  methods: {
      showFilter() {
          this.sortFilter = !this.sortFilter;
      },
      chooseList(event) {
          let node;
          console.log(event.target.nodeName.toUpperCase());
            if (event.target.nodeName.toUpperCase() !== 'LI') {
                node = event.target.parentNode;
            } else {
                node = event.target;
            }
            this.dataType = node.getAttribute('data');
            console.log(this.dataType)
            this.sortFilter = !this.sortFilter;
            this.sortType = this.dataType;
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

.sortList_page {
    padding-top: 1.95rem;
}
.sort_btn {
    padding: .2rem 0;
    font-size: .66rem;
    background-color: #fff;
    border-bottom: 0.025rem solid #f1f1f1;
    position: relative;
    .sort_item {
       
    }
}

.sort_name {
    padding: 0 0.6rem;
    >span {
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
        padding: .6rem .6rem;
    }
}
.choose_item {
    display: flex;
    justify-content: space-between;
    .choose_color {
        color: blue;
    }
    >svg {
        @include wh(.6rem, .6rem);
    }
}
</style>

