<template>
  <div class="myPosted-page">
      <Header go-back="true" head-title="我卖出的"></Header>
      <section>
          <ul>
              <li class="myPosted-item" v-for="(item, index) in soldList" :key="index">
                  <router-link :to="{path: '/shopDetail', query: {product_id: item.product_id}}">
                      <section class="myPosted-item-top">
                        <div class="myPosted-img">
                            <img :src="item.images[0]">
                        </div>
                        <div class="myPosted-content">
                            <h5>{{item.title}}</h5>
                            <p>￥{{item.price}}</p>
                        </div>
                  </section>
                  </router-link>
                  <section class="myPosted-item-bottom">
                      <!-- <a class="myPosted-edit" >删除</a> -->
                      <router-link class="myPosted-edit" :to="{path: '/orderDetail', query: {product_id: item.product_id}}">详情</router-link>
                  </section>
              </li>
          </ul>
      </section>
  </div>
</template>

<script>
import Header from '@/components/Header';
import { mapState } from 'vuex';
import { getMySold } from '@/service/api';

export default {
    data() {
        return {
            soldList: [],
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
            const result = await getMySold({user_id: this.userInfo.user_id});
            this.soldList = result;
        },
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
            text-align: right;
            line-height: 1.8rem;
            .myPosted-edit {
                @include sc(.6rem, rgb(36, 35, 35));
                border: .001rem solid rgb(36, 35, 35);
                padding: .1rem .9rem;
            }
        }
    }
</style>
