<template>
    <div class="orderInfo_page">
        <Header head-title="提交成功"></Header>
        <div class="order_info">
            <section class="order_price">
                <p>交易成功</p>
                <p>￥{{orderInfo.price}}</p>
            </section>
            <!-- <section>
                <h5>
                    <span>long</span>
                    <span>124235243</span>
                </h5>
                <p>fsdfsd fdsf dsf sdf ds </p>
            </section> -->
            <section class="order_product">
                <div class="order_img">
                    <img :src="orderInfo.image">
                </div>
                <p>{{orderInfo.title}}</p>
            </section>
            <section class="order_footer"> 
                <div class="order_item">
                    <span>卖家昵称</span>
                    <span>{{orderInfo.userName}}</span>
                </div>
                <div class="order_item">
                    <span>订单编号</span>
                    <span>{{orderInfo.buy_id}}</span>
                </div>
                <div class="order_item">
                    <span>交易时间</span>
                    <span>{{orderInfo.buyTime}}</span>
                </div>
            </section> 
        </div>
        <div class="login_container" @click="backMain()">返回主页面</div>
    </div>
</template>
<script>
import Header from "@/components/Header";
import { mapState } from "Vuex" 

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState([
            'orderInfo',
        ])
    },
    components: {
        Header,
    },
    methods: {
        backMain() {
            this.$router.push('/home');
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
