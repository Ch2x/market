<template>
  <div class="myPosted-page">
      <Header go-back="true" head-title="我发布的"></Header>
      <section>
          <ul>
              <li class="myPosted-item" v-for="(item, index) in postedList" :key="index">
                  <router-link :to="{path: '/shopDetail', query: {product_id: item.product_id}}">
                      <section class="myPosted-item-top">
                        <div class="myPosted-img">
                            <img :src="item.images[0]" alt="">
                        </div>
                        <div class="myPosted-content">
                            <h5>{{item.title}}</h5>
                            <p>￥{{item.price}}</p>
                        </div>
                  </section>
                  </router-link>
                  <section class="myPosted-item-bottom">
                      <span class="myPosted-out">{{item.isCheck?'':'已被下架，请重新编辑'}}</span>
                      <span>
                          <router-link :to="{path: '/release', query: {product_id: item.product_id}}" class="myPosted-edit">编辑</router-link>
                          <a class="myPosted-edit" @click="delProduct(item.product_id, index)">删除</a>
                      </span>
                  </section>
              </li>
          </ul>
      </section>
  </div>
</template>

<script>
import Header from '@/components/Header';
import { mapState } from 'vuex';
import { getProductUserLists, delProduct } from '@/service/api';

export default {
    data() {
        return {
            postedList: [],
        }
    },
    components: {
        Header,
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
            const result = await getProductUserLists({user_id: this.userInfo.user_id});
            this.postedList = result;
        },
        async delProduct(product_id, index) {
            console.log(product_id);
            const result = await delProduct(this.userInfo.user_id, product_id);
            if(result.status === 1) {
                this.postedList.splice(index, 1);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/mixin";
    .myPosted-page {
        padding-top: 1.95rem;
    }
    .myPosted-item {
        background-color: #fff;
        margin: .4rem .3rem;
        .myPosted-item-top {
            border-bottom: .001rem solid rgb(245,245,245);
            display: flex;
            .myPosted-img {
                @include wh(3.5rem, 4rem);
                margin: .5rem;
                flex: 1;
                >img {
                    @include wh(100%, 100%);
                }
            }
        }
        .myPosted-content {
            margin-top: .55rem;
            flex: 3;
            >p {
                @include sc(.9rem, rgb(230, 63, 63));
            }
        }
        .myPosted-item-bottom {
            display: flex;
            justify-content: space-between;
            line-height: 1.8rem;
            padding: 0 .6rem;
            .myPosted-out {
                @include sc(.6rem, rgb(36, 35, 35));    
            }
            .myPosted-edit {
                @include sc(.6rem, rgb(36, 35, 35));
                border: .001rem solid rgb(36, 35, 35);
                padding: .1rem .9rem;
            }
        }
    }
</style>
