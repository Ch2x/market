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
                                <span>x</span>
                            </a>
                        </li>
                        <li class="pic_item">
                            <div class="pic_addItem">
                                <span class="pic_add">
                                <svg>
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-add"></use>
                                </svg>
                                </span>
                                <span class="pic_font">添加</span>
                                <input type="file" accept="image/png" style="display: none;"/>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
            <section>
                <router-link to="/home" class="release_link">
                    <div class="name">
                        <p>分类</p>
                    </div>
                        <span>选择分类</span>
                        <span class="arrow">
                            <svg class="arrow-svg" fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                         </span>
        
                </router-link>
                <div class="price_link">
                    <div class="name">
                        <p>价格</p>
                    </div>
                        <!-- <span>开个价</span> -->
                        <input type="text">
                        <!-- <span class="arrow">
                            <svg class="arrow-svg" fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                         </span> -->
        
                </div>
            </section>
        </form>
        <section class="releaseShop">确定发布</section>
    </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  data() {
    return {
      images: [
        "../../assets/logo.png",
        "../../assets/logo.png",
        "../../assets/logo.png",
        "../../assets/logo.png",
        "../../assets/logo.png"
      ]
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
      padding: 0.8rem 0;
      input {
        width: 90%;
        @include sc(0.7rem, #666);
      }
    }
    .textarea_container {
      height: 6.6rem;
      padding: 0.8rem 0;
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
          padding: 0.3rem;
          @include fj(center);
          img {
            margin-bottom: 0.3rem;
            @include wh(3.5rem, 3.5rem);
          }
          a {
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
            @include wh(0.5rem, 0.5rem);
            border-radius: 50%;
          }
        }
      }
    }
    .pic_addItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include wh(3.5rem, 3.5rem);
      background-color: rgb(245, 245, 245);
      .pic_add {
        @include wh(1.2rem, 1.2rem);
        display: inline-block;
        svg {
          @include wh(100%,100%);
        }
      }
      .pic_font {
        @include sc(0.7rem, #666);
      }
    }
  }
}
.release_link {
  display: flex;
  align-items: center;
  background: #fff;
  margin-top: 0.5rem;
  padding: 0.666667rem 0.6rem;
  @include sc(0.7rem, #666);
  .name {
    margin-left: 0.48rem;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .arrow {
    @include wh(0.46667rem,0.98rem);
    display: inline-block;
    svg {
      @include wh(100%,100%);
    }
  }
}
.price_link {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0.666667rem 0.6rem;
  @include sc(0.7rem, #666);
  .name {
    margin-left: 0.48rem;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  input {
    width: 20%;
    border: 1px solid #666;
  }
}
.releaseShop {
  width: 96%;
  margin: 1.3rem auto 0;
  line-height: 1.5rem;
  @include borderRadius(5px);
  text-align: center;
  background: #d8584a;
  @include sc(0.6rem,#fff);
  &:active {
    opacity: 0.8;
    background: #c1c1c1;
  }
}
</style>

 