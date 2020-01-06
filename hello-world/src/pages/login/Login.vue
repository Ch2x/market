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
        <div class="login_bottom">
            <router-link :to="'/enroll'">
                <div>新用户注册</div>
            </router-link> 
            <router-link to="/editPass">
                <div>忘记密码？</div>
            </router-link>
        </div>
        <alter-tip v-if="showAlert" :alterText="alterText" @closeTip="closeTip"></alter-tip>
    </div>
</template>
<script>
import Header from "@/components/Header";
import AlterTip from '@/components/AlterTip'
import { mapMutations } from 'vuex';
import { userLogin } from '@/service/api';

export default {
    data() {
        return {
            userAccount: null,
            password: null,
            showAlert: false,
            alterText: '',
        }
    },
    components: {
        Header,
        AlterTip,
    },
    methods: {
        ...mapMutations([
            'saveUserInfo'
        ]),
        async login() {
            if(!this.userAccount) {
                this.showAlert = true;
                this.alterText = '用户名不能为空';
                return;
            }else if(!this.password) {
                this.alterText = '密码不能为空';
                this.showAlert = true;
                return;
            }else {
                var reg = new RegExp(/^[a-zA-Z]\w{3,15}$/, 'ig');
                if(!reg.test(this.userAccount)) {
                    this.alterText = '请输入3到15个有效字符(首位必须为字母)';
                    this.showAlert = true;
                    return;
                }
                const result = await userLogin(this.userAccount,this.password);
                if(result.status === 0) {
                    this.alterText = result.message;
                    this.showAlert = true;
                    return;
                } else {
                    this.saveUserInfo(result);
                    this.$router.go(-1);
                }
            }
        },
        closeTip() {
            this.showAlert = false;
        },
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
                width: 100%;
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
    .login_bottom {
        display: flex;
        justify-content: space-around;
        @include sc(.7rem, rgb(52,158,223));
    }
</style>

