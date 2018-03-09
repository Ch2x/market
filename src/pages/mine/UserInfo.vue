<template>
    <div class="userInfo_page">
        <Header go-back='true'></Header>
        <section class="userInfo">
            <section class="userInfo_section">
                <input type="file" class="userInfo_upload">
                <h2>头像</h2>
                <div class="userInfo_div">
                    <!-- <img  v-if="userInfo" :src="imgBaseUrl + userInfo.avatar" class="userInfo_div_top"> -->
                    <span class="userInfo_div_top" >
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                        </svg>
                    </span>
                    <span class="userInfo_div_bottom">
                        <svg fill="#d8d8d8">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </div>
            </section>
            <router-link to="/profile/setusername" class="userInfo_name">
                <section class="userInfo_section userInfo_section2">
                    <h2>用户名</h2>
                    <div class="userInfo_div">
                        <p>ch2x</p>
                        <span class="userInfo_div_bottom">
                            <svg fill="#d8d8d8">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </section>
            </router-link>
            <section class="exitlogin">退出登录</section>
        </section>
    </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  data() {
    return {};
  },

  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

    .userInfo_page {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f2f2f2;
        z-index: 202;
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }

    .userInfo {
        @include wh(100%,3.1rem);
        .userInfo_upload {
            display: block;
            position: absolute;
            opacity: 0;
            top: 2.35rem;
            left: 0;
            @include wh(100%,3.1rem);
        }
        .userInfo_section {
            margin-top:.4rem;
            padding:.5rem .4rem;
            @include fj(space-between);
            align-items:center;
            border-top:1px solid #ddd;
            background:#fff;
            h2{
                @include sc(.6rem,#333);
                font-weight:500;
                display:flex;
                align-items:center;
            }
            .userInfo_div {
                span {
                    display:inline-block;

                    svg {
                        @include wh(100%,100%);
                    }
                }
                .userInfo_div_top {
                    @include wh(2rem,2rem);
                    @include borderRadius(50%);
                    vertical-align:middle;
                }
                .userInfo_div_bottom {
                    @include wh(.66667rem,1.4rem);
                    position:relative;
                    top:0.44rem;
                }
            }
        }
        .userInfo_section2 {
            margin-top:0;
            padding:.3rem .4rem;
            .userInfo_div {
                @include fj(left);
                p {
                    text-align:left;
                    line-height:1.39rem;
                    @include sc(.7rem,#999);
                    margin-right:.2rem;
                    font-weight:100;
                    font-family:Arial;
                }
                .userInfo_div_bottom{
                    top:0;
                }
            }
        }
        .exitlogin {
            width:96%;
            margin:1.3rem auto 0;
            line-height:1.5rem;
            @include borderRadius(5px);
            text-align:center;
            background:#d8584a;
            @include sc(.6rem,#fff);

        }
        .exitlogin:active {
            opacity:.8;
            background:#C1C1C1;
        }
    }
</style>
