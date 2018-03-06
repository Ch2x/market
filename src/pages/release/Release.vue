<template>
    <div class="release_page">
        <Header go-back="true" head-title="发布宝贝"></Header>
        <form class="releaseForm">
            <div class="container">
                <section class="input_container">
                    <input type="text" placeholder="标题 品类品牌类型都是买家喜欢搜索的">
                </section>
                <section class="textarea_container">
                    <textarea placeholder="描述一下宝贝的细节或者故事"></textarea>
                </section>
                <section class="picture_container">
                    <ul class="pic_list">
                        <li class="pic_item" v-for="(item, index) in images" :key="index">
                            <img :src="item">
                            <a href="">
                                <span>X</span>
                            </a>
                        </li>
                        <li class="pic_item">
                            <input type="file" accept="image/png" style="display: none;"/>
                        </li>
                    </ul>
                </section>
            </div>
        </form>
    </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  data() {
    return {
        images: [
            '../../assets/logo.png',
            '../../assets/logo.png',
            '../../assets/logo.png',
            '../../assets/logo.png',
            '../../assets/logo.png',
        ],
    };
  },
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/mixin";

.release_page {
  padding-top: 1.95rem;
  p,
  span,
  input {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}
.releaseForm {
  .container {
      background-color: #fff;
      padding: 0 0.8rem;
      .input_container {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f1f1f1;
        padding: .6rem 0;
        input {
            width: 90%;
            @include sc(0.7rem, #666);
        }
    }
    .textarea_container {
        height: 5.2rem;
        padding: .6rem 0;
        textarea {
            @include wh(100%, 100%);
            @include sc(0.7rem, #666);
        }
    }
    .picture_container {
        .pic_list {
            display: flex;
            flex-wrap: wrap;
            .pic_item {
                position: relative;
                width: 25%;
                padding: .3rem;
                @include fj(center);
                img {
                    margin-bottom: .3rem;
                    @include wh(1.8rem, 1.8rem);
                }
                a {
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    @include wh(.5rem, .5rem);
                    border-radius: 50%;
                }
            }
        }
    }
  }
}
</style>

 