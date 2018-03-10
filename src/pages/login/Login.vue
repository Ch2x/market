<template>
    <div class="login_page">
        <Header go-back="true" head-title="登录"></Header>
        <form class="loginForm">
            <section class="input_container">
                <input type="text" placeholder="账号" v-model.lazy="userAccount">
            </section>
            <section class="input_container">
                <input type="password" placeholder="密码" v-model="password">
            </section>
        </form>
        <div class="login_container" @click="login">登录</div>
    </div>
</template>
<script>
import Header from "@/components/Header";
import { mapMutations } from 'vuex';
import { userLogin } from '@/service/api';

export default {
    data() {
        return {
            userAccount: null,
            password: null,
        }
    },
    components: {
        Header,
    },
    methods: {
        ...mapMutations([
            'saveUserInfo'
        ]),
        async login() {
            if(!this.userAccount) {
                return;
            }else if(!this.password) {
                return;
            }else {
                this.userInfo = await userLogin(this.userAccount,this.password);
            }
            if(this.userInfo.user_id) {
                this.saveUserInfo(this.userInfo);
                this.$router.go(-1);
            }
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/mixin';

    .login_page {
        padding-top: 1.95rem;
        p, span, input{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .loginForm {
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

