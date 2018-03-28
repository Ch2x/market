<template>
    <div class="enroll_page">
        <Header go-back='true' head-title="注册"></Header>
        <form class="enrollForm">
            <section class="input_container">
                <input type="text" placeholder="账号" v-model.lazy="userAccount">
            </section>
            <section class="input_container">
                <input type="password" placeholder="密码" v-model="password">
            </section>
            <section class="input_container">
                <input type="password" placeholder="确认密码" v-model="confirmPassword">
            </section>
        </form>
        <div class="enroll_container" @click="enroll">注册</div>
        <alter-tip v-if="showAlert" :alterText="alterText" @closeTip="closeTip"></alter-tip>
    </div>
</template>
<script>
import Header from "@/components/Header";
import AlterTip from '@/components/AlterTip'
import { userEnroll } from '@/service/api';

export default {
    data() {
        return {
            userAccount: '',
            password: '',
            confirmPassword: '',
            showAlert: false,
            alterText: '',
        }
    },
    components: {
        Header,
        AlterTip,
    },
    methods: {
        async enroll() {
            if(!this.userAccount) {
                this.showAlert = true;
                this.alterText = '用户名不能为空';
                return;
            }else if(!this.password) {
                this.alterText = '密码不能为空';
                this.showAlert = true;
                return;
            }else if(!this.confirmPassword) {
                this.alterText = '密码不能为空';
                this.showAlert = true;
                return;
            }else if(this.confirmPassword!==this.password) {
                this.alterText = '两次密码不一致';
                this.showAlert = true;
                return;
            }else {
                const result = await userEnroll(this.userAccount, this.password, this.confirmPassword);
                if(result.status === 1) {
                    this.alterText = result.message;
                    this.showAlert = true;
                    this.$router.go(-1);
                    return;
                }else if(result.error === 'ERROR_USERNAME') {
                    this.alterText = result.message;
                    this.showAlert = true;
                    return;
                }
            }
        },
        closeTip() {
            this.showAlert = false;
        },
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/mixin'; 
.enroll_page {
        padding-top: 1.95rem;
        p, span, input{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .enrollForm {
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
    .enroll_container {
        margin: 0.5rem 1rem;
        @include sc(.7rem, #fff);
        background-color: #FF3D03;
        padding: .5rem 0;
        border: 1px;
        border-radius: 0.15rem;
        text-align: center;
    }
</style>


