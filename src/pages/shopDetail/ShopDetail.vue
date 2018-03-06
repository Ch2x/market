<template>
  <div class="shopDetail_page">
      <Header></Header>
      <section class="shopDetail">
            <section class="shopDetail_top">
                    <!-- <img src="../../assets/logo.png" class="shopDetail_avatar"> -->
                    <span class="shopDetail_avatar">
                        <svg class="shopDetail_avatar_svg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                        </svg>
                    </span>
                    <div class="shopDetail_name">
                        <h5>abc</h5>
                        <p>五个小时前来过</p>
                    </div>
            </section>
            <section class="shopDetail_content">
                <h2>￥88</h2>
                <p>
                    #2018兽医全国研究生入学考试书籍#
                    各科统考书籍
                    中农、南农自主命题复习资料
                    各科视频课程
                    华山5栋自习室自用书桌两张：大张50RMB；小桌30RMB
                    还有各类笔记，高分考生经验，助你考研成功
                </p>
            </section>
            <section>
                <img src="../../assets/logo.png">
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
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

    .shopDetail_page {
        padding-top: 1.95rem;
        background: #fff;
    }
    .shopDetail {
        padding: 0 .6rem;
        .shopDetail_top {
            display: flex;
            padding: .666667rem 0;
            border-bottom: .0625rem solid rgb(245,245,245);
            .shopDetail_avatar {
                display: inline-block;
                @include wh(2.5rem,2.5rem);
                border-radius: 50%;
                vertical-align: middle;
                .shopDetail_avatar_svg{
                    background: #ffffff;
                    border-radius:50%;
                    @include wh(2.5rem,2.5rem);
                }
            }
            .shopDetail_name {
                margin-left: .48rem;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                p {
                    font-weight:700;
                    @include sc(.8rem,rgb(12, 2, 2));
                }
            }
        }
    }
    .shopDetail_content {
        h2 {
            @include sc(2rem, rgb(255,0,0));
        }
    }
</style>


