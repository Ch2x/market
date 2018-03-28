<template>
    <div class="page_shopCart">
        <Header go-back="true" head-title="购物车"></Header>
        <section class="cart-item">
            <div class="item-top">
                <h5>admin</h5>
                <span>
                     <svg class="arrow-svg" fill="#bbb">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-delete"></use>
                    </svg>
                </span>
            </div>
            <section class="item-middle">
                <div class="shop-item">
                    <section class="shop_img">
                        <img src="http://192.168.1.167:3000/img/default.jpg">
                    </section>
                    <h5>商品商品</h5>
                    <span>￥36</span>
                </div>
            </section>
            <section class="item-bottom">
                <span>合计￥74</span>
                <button>去结算</button>
            </section>
        </section>
    </div>
</template>
<script>
import Header from "@/components/Header";
export default {
    data() {
        return {

        }
    },
    components: {
        Header,
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
    .item-top {
        padding: .5rem .6rem;
        display: flex;
        border-bottom: 0.025rem solid #f1f1f1;
        >h5 {
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
            }
            &:last-child {
                border-bottom: 0;
            }
        }
    }
    .item-bottom {
        padding: .4rem .6rem;
        text-align: right;
        >button {
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

