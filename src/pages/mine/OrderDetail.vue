<template>
    <div class="orderInfo_page">
        <Header head-title="订单详情" go-back="true"></Header>
        <div class="order_info">
            <section class="order_price">
                <p>交易成功</p>
                <p>￥{{info.price}}</p>
            </section>
            <section class="order_address">
                <h5>
                    <span>{{info.addressName}}</span>
                    <span>{{info.phone}}</span>
                </h5>
                <p>{{info.address}}</p>
            </section>
            <section class="order_product">
                <div class="order_img">
                    <img :src="info.image">
                </div>
                <p>{{info.title}}</p>
            </section>
            <section class="order_footer"> 
                <div class="order_item">
                    <span>卖家昵称</span>
                    <span>{{info.soldName}}</span>
                </div>
                <div class="order_item">
                    <span>订单编号</span>
                    <span>{{info.buy_id}}</span>
                </div>
                <div class="order_item">
                    <span>交易时间</span>
                    <span>{{info.buyTime}}</span>
                </div>
            </section> 
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header";
import { mapState } from "Vuex" 
import { getBuyOrderDetail } from "../../service/api"

export default {
    data() {
        return {
            info: {},
        }
    },
    computed: {
        ...mapState([
            'userInfo'
        ])
    },
    components: {
        Header,
    },
    created() {
        this.product_id = this.$route.query.product_id;
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            const result = await getBuyOrderDetail({user_id: this.userInfo.user_id, product_id: this.product_id});
            this.info = result;
            console.log(this.info);
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/mixin";

.orderInfo_page {
    padding-top: 1.95rem;
}

.order_info {
    background-color: #fff;
}

.order_price {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2.6rem 0;
        >p {
            &:first-child {
                font-weight: bolder;
                font-size: 1.6rem;
            }
            &:last-child {
                padding-top: 1.6rem;
                @include sc(2rem, rgb(230, 63, 63));
            }
        }
}
.order_address {
    padding: .6rem 0;
    margin: 0 .6rem;
    border-top: 0.025rem solid #f1f1f1;
    border-bottom: 0.025rem solid #f1f1f1;
}
.order_product {
    display: flex;
    padding: .6rem 0;
    margin: 0 .6rem;
    border-top: 0.025rem solid #f1f1f1;
    border-bottom: 0.025rem solid #f1f1f1;
    .order_img {
        margin-right: .6rem;
        @include wh(3.2rem, 3.2rem);
        >img{
            @include wh(100%, 100%);
        }
    }
}
.order_footer {
    padding: 1.2rem .6rem;
    .order_item {
        display: flex;
        justify-content: space-between;
        @include sc(.8rem, rgb(218, 218, 218));
    }
}
.login_container {
        margin: 0.5rem 1rem;
        @include sc(.7rem, #fff);
        background-color: #4cd964;
        padding: .5rem 0;
        border: 1px;
        border-radius: 0.15rem;
        text-align: center;
    }
</style>
