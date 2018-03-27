<template>
    <div class="message_page">
        <Header head-title='消息中心'></Header>
        <div>
            <ul>
                
                    <li  v-for="(item, index) in list" :key="index">
                        <section v-if="item.isDelete" class="message_item">
                            <section class="message_left">
                                <img :src='"http://192.168.1.167:3000/img/"+item.avatar'>
                            </section>
                            <section class="message_middle">
                                <h5>{{item.userName}}</h5>
                                <p>{{item.content}}</p>
                                <p>{{item.commentTime}}</p>
                            </section>
                            <section class="message_right">
                                <img :src='item.image' alt="">
                            </section>
                        </section>
                        <router-link v-else class="message_item" :to="{path: '/shopDetail', query: {product_id: item.product_id}}" >
                            <section class="message_left">
                                <img :src='"http://192.168.1.167:3000/img/"+item.avatar'>
                            </section>
                            <section class="message_middle">
                                <h5>{{item.userName}}</h5>
                                <p>{{item.content}}</p>
                                <p>{{item.commentTime}}</p>
                            </section>
                            <section class="message_right">
                                <img :src='item.image' alt="">
                            </section>
                        </router-link>
                </li>
               
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mapState } from 'Vuex';
import { getMyMessage } from '../../service/api'

export default {
    data() {
        return {
            list: [],
        }
    },
    components: {
        Header,
        Footer,
    },
    computed: {
        ...mapState([
            'userInfo',
        ]),
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            const result = await getMyMessage();
            this.list = result;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.message_page {
    padding-top: 1.95rem;
}
.message_item {
    display: flex;
    justify-content: space-between;
    padding: .6rem .6rem;
    background-color: #fff;
    border-bottom: 0.0625rem solid rgb(245, 245, 245);
    font-size: .66rem;
    .message_left {
        @include wh(1.8rem, 1.8rem);
        >img {
            @include wh(100%, 100%);
        }
    }
    .message_middle {
        flex: 1;
        padding: 0 .6rem;
    }
    .message_right {
        @include wh(2.4rem, 2.4rem);
        >img {
            @include wh(100%, 100%);
        }
    }
}
</style>
