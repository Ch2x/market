<template>
    <div class="edit_page">
        <Header go-back='true' head-title="找回密码"></Header>
        <form class="edit_form">
            <section class="input_container">
                <input type="text" placeholder="请输入要重置密码的用户名" v-model.lazy="userName">
            </section>
            <section class="input_container">
                <input type="text" placeholder="验证码" v-model="codeNumber" maxlength="4">
                <div class="codeImg" @click="getCaptchaCode">
                    <span v-show="captchaCodeImg" v-html="captchaCodeImg"></span>
                </div>
            </section>
        </form>
        <div class="edit_container" @click="editClick">找回密码</div>
        <p class="edit_text">通过邮箱找回密码</p>
        <alter-tip v-if="showAlert" :alterText="alterText" @closeTip="closeTip"></alter-tip>
    </div>
</template>
<script>
import Header from "@/components/Header";
import AlterTip from '@/components/AlterTip'
import { getcaptchas, changePassword } from '@/service/api';

export default {
    data() {
        return {
            userName: '',
            codeNumber: '',
            captchaCodeImg: null,
            showAlert: false,
            alterText: '',
        }
    },
    components: {
        Header,
        AlterTip
    },
    created() {
        this.getCaptchaCode();
    },
    methods: {
        async getCaptchaCode() {
            const result = await getcaptchas();
            this.captchaCodeImg = result.data;
        },
        async editClick() {
            const result = await changePassword({userName: this.userName, codeNumber:this.codeNumber});
            if(result.status == 1) {
                const self = this;
                await setTimeout(function() {
                    self.$router.go(-1);
                }, 1000)
                this.alterText = result.message;
                this.showAlert = true;
            }else {
                this.alterText = result.message;
                this.showAlert = true;
                this.getCaptchaCode();
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
    .edit_page {
        padding-top: 1.95rem;
    }
    .edit_form {
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
        .codeImg {
            >span {
                @include wh(1.5rem, .5rem);
                >svg {
                    @include wh(100%, 100%);
                }
            }
        }
    }
    .edit_container {
        margin: 0.5rem 1rem;
        @include sc(.7rem, #fff);
        background-color: #4cd964;
        padding: .5rem 0;
        border: 1px;
        border-radius: 0.15rem;
        text-align: center;
    }
    .edit_text {
        text-align: center;
    }
</style>


