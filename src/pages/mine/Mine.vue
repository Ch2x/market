<template>
    <div>
        <Header head-title="我的"></Header>
        <section>
            <section class="mine_top">
                <router-link :to="userInfo&&userInfo.user_id?'/userInfo':'/login'" class="mine_link">
                    <img  v-if="userInfo" :src="'http://localhost:3000/img/' + avatar" class="mine_avatar">
                    <span class="mine_avatar" v-else>
                        <svg class="mine_avatar_svg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                        </svg>
                    </span>
                    <div class="mine_name">
                        <p>{{login?userInfo.userName:'登录/注册'}}</p>
                    </div>
                    <span class="arrow">
                        <svg class="arrow-svg" fill="#fff">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </router-link>
            </section>
            <section class="mine_list">
                <section  class="myrelease" @click="changeView({path:'/myPosted'})">
                    <aside>
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-release"></use>
                        </svg>
                    </aside>
                    <div class="myrelease-div">
                        <span>我的发布</span>
                        <span class="myrelease-divsvg">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </section>
                 <section  class="myrelease" @click="changeView({path:'/myBuy'})">
                    <aside>
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-buy"></use>
                        </svg>
                    </aside>
                    <div class="myrelease-div">
                        <span>我的买到</span>
                        <span class="myrelease-divsvg">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </section>
                <section  class="myrelease" @click="changeView({path:'/mySold'})">
                    <aside>
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-sold"></use>
                        </svg>
                    </aside>
                    <div class="myrelease-div">
                        <span>我的卖出</span>
                        <span class="myrelease-divsvg">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </section>
                <section  class="myrelease" @click="changeView({path:'/address'})">
                    <aside>
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-address"></use>
                        </svg>
                    </aside>
                    <div class="myrelease-div">
                        <span>收货地址</span>
                        <span class="myrelease-divsvg">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </section>
            </section>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mapState } from 'vuex';
import { } from '@/service/api';

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState([
            'userInfo',
            'login',
            'avatar',
        ])
    },
    watch: {
        
    },
    methods: {
        changeView(path) {
            if(!this.userInfo) {
                this.$router.push('/login');
            } else {
                this.$router.push(path);
            }
        }
    },
    components: {
        Header,
        Footer,
    },

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

    .mine_top {
        padding-top: 1.95rem;
        .mine_link {
            display:flex;
            // -webkit-box-align: center;
            // -ms-flex-align: center;
            align-items: center;
            background: rgb(52, 158, 223);
            padding: .666667rem .6rem;
            .mine_avatar {
                display: inline-block;
                @include wh(2.5rem,2.5rem);
                border-radius: 50%;
                vertical-align: middle;
                .mine_avatar_svg{
                    background: #ffffff;
                    border-radius:50%;
                    @include wh(2.5rem,2.5rem);
                }
            }
            .mine_name {
                margin-left: .48rem;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                p {
                    font-weight:700;
                    @include sc(.8rem,#fff);
                }
            }
            .arrow{
                @include wh(.46667rem,.98rem);
                display:inline-block;
                svg{
                   @include wh(100%,100%);
                }
            }
        }
    }
    .mine_list {
        margin-top: .4rem;
        background: #fff;
        .myrelease {
            padding-left:1.6rem;
            display:flex;
            align-items: center;
            aside{
                @include wh(.7rem,.7rem);
                margin-left:-.866667rem;
                margin-right:.266667rem;
                display:flex;
                align-items: center;
                svg{
                    @include wh(100%,100%);
                }
            }
            .myrelease-div{
                width:100%;
                border-bottom:1px solid #f1f1f1;
                padding:.433333rem .266667rem .433333rem 0;
                @include sc(.7rem,#333);
                display:flex;
                justify-content:space-between;
                span{
                    display:block;
                }
                .myrelease-divsvg{
                    @include wh(.46667rem,.466667rem);
                    svg{
                        @include wh(100%,100%);
                    }
                }
            }
        }
    }
</style>
