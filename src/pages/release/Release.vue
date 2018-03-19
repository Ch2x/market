<template>
    <div class="release_page">
        <Header head-title="发布宝贝">
          <span slot="cancel" @click="handleCancel" class="release_cancel">
           <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cancel"></use>
            </svg>
          </span>
        </Header>
        <form class="releaseForm" enctype="multipart/form-data" action="post">
            <div class="container">
                <section class="input_container">
                    <input type="text" placeholder="标题 品类品牌类型都是买家喜欢搜索的" v-model="title">
                </section>
                <section class="textarea_container">
                    <textarea placeholder="描述一下宝贝的细节或者故事" v-model="description"></textarea>
                </section>
                <section class="picture_container">
                    <ul class="pic_list">
                        <li class="pic_item" v-for="(item, index) in images" :key="index">
                            <img :src="item">
                            <div class="del-icon" @click="delImage(index)">
                              <svg>
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cancel"></use>
                            </svg>
                            </div>
                        </li>
                        <li class="pic_item">
                            <input type="file" name="file" accept="image/*" multiple="multiple" id="input_img" @change="onFileChange" style="display: none;"/>
                            <label class="pic_addItem" for="input_img">
                                <span class="pic_add">
                                <svg>
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-add"></use>
                                </svg>
                                </span>
                                <span class="pic_font" for="input_img">添加</span>
                            </label>
                        </li>
                    </ul>
                </section>
            </div>
            <section>
                <router-link to="/releaseSort" class="release_link">
                    <div class="name">
                        <p>分类</p>
                    </div>
                        <span>{{addSort?addSort:'选择分类'}}</span>
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
                        <input type="text" placeholder="价格" v-model="price">
                        <!-- <span class="arrow">
                            <svg class="arrow-svg" fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                         </span> -->
        
                </div>
            </section>
            <section class="releaseShop" @click="confirmShop">确定发布</section>
        </form>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "@/components/Header";
import AlterTip from '@/components/AlterTip'
import { mapState, mapMutations } from "Vuex";
import { releaseProduct, getProductDetail, updateProduct } from '@/service/api';

export default {
  data() {
    return {
      images: [],
      title: "",
      description: "",
      price: '',
      product_id: '',
    };
  },
  computed: {
    ...mapState(
      [
      "addSort",
      'userInfo',
      ]
    )
  },
  created() {
  },
  mounted() {
    if(!(this.userInfo && this.userInfo.user_id)) {
      this.$router.push('/login');
    } 
    if(this.$route.query.product_id) {
      this.product_id = this.$route.query.product_id;
      this.init();
    }
  },
  methods: {
    ...mapMutations([
        'saveSort',
    ]),
    async init() {
      const result = await getProductDetail(this.product_id);
      this.price = result.product.price;
      this.description = result.product.description;
      this.title = result.product.title;
      this.images = result.product.images;
      this.saveSort({sort: result.product.sort});
    },
    onFileChange(event) {
      var files = event.target.files;
      console.log(files);
      if (files.length === 0) return;
      this.showImage(files);
    },
    showImage(files) {
      if (typeof FileReader === "undefined") {
        alert("您的浏览器不支持图片上传，请升级您的浏览器");
        return false;
      }
      var image = new Image();
      var self = this;
      var leng = files.length;
      for (var i = 0; i < leng; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = function(e) {
          self.images.push(e.target.result);
        };
      }
    },
    delImage(index) {
      this.images.splice(index,1);
    },
    handleCancel() {
      this.$router.go(-1);
    },
    async confirmShop() {
      if(this.$route.query.product_id) {
        const result = await updateProduct(this.product_id, this.images, this.addSort, this.description, this.title, this.price);
      }else {
        const confirmRes = await releaseProduct(this.userInfo.user_id, this.images, this.addSort, this.description, this.title, this.price);
      }
      this.$router.go(-1);
    }
  },
  components: {
    Header,
    AlterTip
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
            @include wh(3.8rem, 3.8rem);
          }
          .del-icon {
            background-color: rgb(52, 158, 223);
            border: 0.12rem solid #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            @include wh(1rem, 1rem);
            border-radius: 50%;
            svg {
              @include wh(60%, 60%);
            }
          }
        }
      }
    }
    .pic_addItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include wh(3.8rem, 3.8rem);
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
    width: 19%;
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
.release_cancel {
  left: 0.5rem;
  @include wh(0.6rem, 1rem);
  line-height: 2.2rem;
  margin-left: 0.4rem;
  svg {
    @include wh(100%, 100%);
  }
}
</style>

 