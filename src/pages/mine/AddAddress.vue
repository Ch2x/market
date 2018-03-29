<template>
    <div class="add_page">
        <Header go-back="true" head-title="新增地址"></Header>
        <form class="addForm">
            <section class="addInput_item">
                <span>联系人</span>
                <input type="text" placeholder="姓名">
            </section>
            <section class="addInput_item">
                <span>电话</span>
                <input type="text" placeholder="手机号码">
            </section>
            <section class="addInput_item">
                <span>地址</span>
                <input type="text" placeholder="收获地址">
            </section>
            <section class="addInput_item">
                <span>邮政编号</span>
                <input type="text" placeholder="编号">
            </section>
            <section class="addCheck">
                <input type="checkbox" placeholder="编号">
                <span>设置为默认收货地址</span>
            </section>
        </form>
        <div class="login_container">保存</div>
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
@import '../../assets/style/mixin';

.add_page {
    padding-top: 2.5rem;
}

.addForm {
    padding: 0 .6rem;
    background-color: #fff;
    .addInput_item {
        display: flex;
        padding: .6rem 0;
        border-bottom: .025rem solid #f1f1f1;
        >span {
            @include sc(.8rem, #666);
            flex: 1;
        }
        >input {
            flex: 3;
            width: 100%;
        }
    }
    .addCheck {
        padding: .3rem 0;
        >span {
            @include sc(.8rem, #666);
        }
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

