<template>
    <div class="address_page">
        <Header go-back="true" head-title="收获地址">
            <router-link to="/addAddress" slot="add">
                <span class="addIcon">新增地址</span>
            </router-link>
        </Header>
        <ul>
            <li class="address_item">
                <section class="address_section">
                    <div>
                    <span>收货人</span>
                    <span>1242315435</span>
                </div>
                    <p><span>收货地址：</span></p>
                </section>
                <aside class="address_aside">
                    <span>
                     <svg class="arrow-svg" fill="#bbb">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-delete"></use>
                    </svg>
                </span>
                </aside>
            </li>
        </ul>
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
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/mixin";
.address_page {
    padding-top: 1.95rem;
}
.addIcon {
    @include sc(.8rem, #fff);
    position: absolute;
    right: .6rem;
    line-height: 1.95rem;
}
.address_item {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: .6rem .6rem;
    border-bottom: 0.025rem solid #f1f1f1;
    font-size: .8rem;
}
.address_section {
    flex: auto;
}
.address_aside {
    >span {
            display: inline-block;
            @include wh(1.3rem, 1.3rem);
            >svg {
              @include wh(100%, 100%);  
            }
        }
}
</style>

