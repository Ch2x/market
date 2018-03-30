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
        <div class="buy_detail">
            <p>收货地址</p>
            <div>
                <h5>{{address.name + address.phone}}</h5>
                <p>{{address.address}}</p>
            </div>
        </div>
        <footer class="buy_footer">
            <div>
                <span>付款：￥{{product.price}}</span>
            </div>
            <section class="buy_confirm">
                <button @click="buyProduct">确定</button>
            </section>
        </footer>
    </div>
</template>
<script>
import Header from "@/components/Header";
import { getOrderInfo, confirmOrder } from '../../service/api';
import { mapState } from 'Vuex';

export default {
    data() {
        return {
            product_id: '',
            address: '',
            product: '',
            image: '',
        }
    },
    computed: {
        ...mapState([
            'userInfo',
        ])
    },
    components: {
        Header,
    },
    created() {
        this.product_id = this.$route.query.product_id
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            const result = await getOrderInfo({user_id: this.userInfo.user_id, product_id: this.product_id})
            console.log(result);
            this.address = result.address;
            this.product = result.product;
            this.image = result.product.images[0];
        },
        async buyProduct() {
            const result = await confirmOrder({
                user_id: this.userInfo.user_id,
                address_id: this.address.address_id,
                product_id: this.product.product_id,
            })
            if(result.status) {
                console.log(1);
            }
        }
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
        @include wh(6.5rem, 6.5rem);
        >img {
            @include wh(100%, 100%);
        }
    }
    .buy_product_detail {

    }
}
.buy_detail {
    margin-top: .8rem;
    padding: .8rem .6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: right;
    background-color: #fff;
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


