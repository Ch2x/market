<template>
    <div class="registered_page">
        <Header go-back="true" head-title="注册"></Header>
        <form class="registeredForm">
            <section class="input_container">
                <input type="text" placeholder="账号">
            </section>
            <section class="input_container">
                <input type="password" placeholder="密码">
            </section>
            <section class="input_container">
                <input type="password" placeholder="再次输入密码">
            </section>
        </form>
        <div class="registered_container">注册</div>
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
    .registered_page {
        padding-top: 1.95rem;
        p, span, input{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .registeredForm {
        background-color: #fff;
        margin-top: .6rem;
        .input_container {
            display: flex;
            justify-content: space-between;
            padding: .6rem .8rem;
            border-bottom: 1px solid #f1f1f1;
            input {
                @include sc(.7rem, #666);
            } 
        }
    }
    .registered_container {
        margin: 0.5rem 1rem;
        @include sc(.7rem, #fff);
        background-color: #4cd964;
        padding: .5rem 0;
        border: 1px;
        border-radius: 0.15rem;
        text-align: center;
    }
</style>


