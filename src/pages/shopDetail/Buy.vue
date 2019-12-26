<template>
    <div class="buy_page">
        <Header go-back="true" head-title="购买宝贝"></Header>
        <div class="buy_product">
            <section class="buy_product_img">
                <img :src="image">
            </section>
            <section class="buy_product_detail">
                <h5>{{product.title}}</h5>
            </section>
        </div>
        <router-link to="/chooseAddress">
            <div class="buy_detail">
                <div v-if="address" class="buy_info">
                    <p>收货地址</p>
                    <div class="buy_address">
                        <p>{{address.name + address.phone}}</p>
                        <p>{{address.address}}</p>
                    </div>
                </div>
                <div v-else>请添加一个收货地址</div>
                <span class="address_arrow">
                    <svg fill="#bbb">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                    </svg>
                </span>
            </div>
        </router-link>
        <footer class="buy_footer">
            <div class="buy_price">
                付款：<span>￥{{product.price}}</span>
            </div>
            <section class="buy_confirm">
                <button @click="buyProduct">确定</button>
            </section>
        </footer>
        <router-view></router-view>
        <alter-tip v-if="showAlert" :alterText="alterText" @closeTip="closeTip"></alter-tip>
    </div>
</template>
<script>
import Header from "@/components/Header";
import AlterTip from '@/components/AlterTip'
import { getOrderInfo, confirmOrder } from '../../service/api';
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            product_id: '',
            product: '',
            image: '',
            showAlert: false,
            alertText: '',
        }
    },
    computed: {
        ...mapState([
            'userInfo',
            'address',
        ])
    },
    components: {
        Header,
        AlterTip,
    },
    created() {
        this.product_id = this.$route.query.product_id
    },
    mounted() {
        this.init();
    },
    methods: {
        ...mapMutations([
            'chooseAddress',
            'saveOrderInfo',
            'confirmAddress',
        ]),
        async init() {
            const result = await getOrderInfo({user_id: this.userInfo.user_id, product_id: this.product_id})
            console.log(result);
            this.product = result.product;
            this.image = result.product.images[0];
            if(result.address) {
                this.chooseAddress({address: result.address});
            }
        },
        async buyProduct() {
            if(!this.address) {
                this.alterText = '请输入地址';
                this.showAlert = true;
                return;
            }
            const result = await confirmOrder({
                user_id: this.userInfo.user_id,
                address_id: this.address.address_id,
                product_id: this.product.product_id,
            })
            if(result.status) {
                this.saveOrderInfo({
                    price: this.product.price,
                    image: this.image,
                    title: this.product.title,
                    buyTime: result.message.buyTime,
                    buy_id: result.message.buy_id,
                    userName: result.message.userName,
                });
                this.chooseAddress({address: null});
                this.confirmAddress({newAddress: false});
                this.$router.push('/orderSuccess');
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

.buy_page {
    padding-top: 1.95rem;
}
.buy_product {
    display: flex;
    background-color: #fff;
    .buy_product_img {
        flex: 1;
        @include wh(6.5rem, 6.5rem);
        >img {
            @include wh(100%, 100%);
        }
    }
    .buy_product_detail {
        padding: .6rem .8rem;
        flex: 2;
    }
}
.buy_detail {
    margin-top: .8rem;
    padding: .8rem .6rem;
    text-align: right;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .buy_address {
        font-size: .8rem;
    }
    .buy_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: auto;
    }
    .address_arrow {
        @include wh(.8rem, .8rem);
        >svg {
            @include wh(100%, 100%);
        }
    }
}
.buy_footer {
    background-color: #fff;
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
    @include wh(100%, 1.95rem);
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: .6rem;
}
.buy_price {
    >span {
        color: rgb(230, 63, 63);
    }
}
.buy_confirm {
    height: 100%;
    >button {
        display: inline-block;
        background-color: rgb(255,34,46);
        height: 100%;
        padding: 0 1.5rem;
        text-align: center;
        @include sc(.6rem, #fff);
        border-radius: 0.1rem;
        border: 1px;
  }
}
</style>


