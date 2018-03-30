<template>
    <div class="page_shopCart">
        <Header go-back="true" head-title="购物车"></Header>
        <section class="cart-item" v-for="(item, index) in cartList" :key="index">
            <div class="item-top">
                <h5>{{item.owner}}</h5>
                <span @click="delProduct(item.products)">
                     <svg class="arrow-svg" fill="#bbb">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-delete"></use>
                    </svg>
                </span>
            </div>
            <section class="item-middle" v-for="value in item.products" :key="value.product_id">
                <div class="shop-item">
                    <section class="shop_img">
                        <img :src="value.images">
                    </section>
                    <h5>{{value.title}}</h5>
                    <span>￥{{value.price}}</span>
                </div>
            </section>
            <section class="item-bottom">
                <span>合计￥{{item.total}}</span>
                <router-link :to="{path: '/buy', query: {product_id: item.products[0].product_id}}">
                    <button>去结算</button>
                </router-link>
            </section>
        </section>
        <alter-tip v-if="showAlert" :alterText="alterText" @closeTip="closeTip"></alter-tip>
    </div>
</template>
<script>
import Header from "@/components/Header";
import AlterTip from '@/components/AlterTip'
import { getMyCart, delShopCart } from "../../service/api";
import { mapState } from 'Vuex'; 

export default {
    data() {
        return {
            cartList: [],
            showAlert: false,
            alterText: ''
        }
    },
    computed: {
        ...mapState([
            'userInfo',
        ])
    },
    mounted() {
        this.init();
    },
    components: {
        Header,
        AlterTip,
    },
    methods: {
        async init() {
            const result = await getMyCart({user_id: this.userInfo.user_id});
            var list =[];
            for(let i = 0; i<result.length; i++) {
                if(JSON.stringify(list).indexOf(JSON.stringify(result[i].owner)) === -1) {
                    let total = result[i].price;
                    list.push({
                        owner: result[i].owner,
                        owner_id: result[i].owner_id,
                        total: total,
                        products: [
                            {
                                price: result[i].price,
                                title: result[i].title,
                                product_id: result[i].product_id,
                                images: result[i].images,
                                cart_id: result[i].cart_id,
                            }
                        ]
                    })
                } else {
                    for(let j = 0; j<list.length; j++) {
                        if(list[j].owner_id === result[i].owner_id) {
                            list[j].products.push({
                                price: result[i].price,
                                title: result[i].title,
                                product_id: result[i].product_id,
                                images: result[i].images,
                                cart_id: result[i].cart_id,
                            })
                            list[j].total += result[i].price;
                            break;
                        }
                    }
                }
            }
            this.cartList = list;
        },
        async delProduct(products) {
            let arr = [];
            products.forEach((item) => {
                arr.push(item.cart_id);
            })
            const result = await delShopCart(this.userInfo.user_id, arr);
            if(result.status === 1) {
                this.init();
                this.alterText = '删除成功';
                this.showAlert = true;
            }
        },

        closeTip() {
            this.showAlert = false;
        },
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/mixin";

.page_shopCart {
    padding-top: 1.95rem;
}
.cart-item {
    background-color: #fff;
    margin-top: .6rem;
    .item-top {
        padding: .5rem .6rem;
        display: flex;
        border-bottom: 0.025rem solid #f1f1f1;
        >h5 {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: auto;
        }
        >span {
            display: inline-block;
            @include wh(.8rem, .8rem);
            >svg {
              @include wh(100%, 100%);  
            }
        }
    }
    .item-middle {
        border-bottom: 0.025rem solid #f1f1f1;
        .shop-item {
            display: flex;
            padding: .5rem 0;
            margin: 0 .6rem;
            border-bottom: 0.025rem solid #f1f1f1;
            .shop_img {
                @include wh(1.8rem, 1.8rem);
                >img {
                    @include wh(100%, 100%);
                }
            }
            >h5 {
                padding: 0 .3rem;
                flex: auto;
                width: 8.5rem;
                color: #333;
                @include font(0.65rem, 0.65rem, "PingFangSC-Regular");
                font-weight: 700;
            }
            &:last-child {
                border-bottom: 0;
            }
        }
    }
    .item-bottom {
        padding: .4rem .6rem;
        text-align: right;
        button {
            background-color: #4cd964;
            padding: .3rem .6rem;
            text-align: center;
            @include sc(.6rem, #fff);
            border-radius: 0.1rem;
            border: 1px;
        }
    }
}
</style>

