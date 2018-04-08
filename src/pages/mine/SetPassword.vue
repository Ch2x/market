<template>
    <div class="enroll_page">
        <Header go-back='true' head-title="修改密码"></Header>
        <form class="enrollForm">
            <section class="input_container">
                <input type="password" placeholder="旧密码" v-model="oldPassword">
            </section>
            <section class="input_container">
                <input type="password" placeholder="新密码" v-model="password">
            </section>
            <section class="input_container">
                <input type="password" placeholder="确认密码" v-model="confirmPassword">
            </section>
        </form>
        <div class="enroll_container" @click="onEdit">修改密码</div>
        <alter-tip v-if="showAlert" :alterText="alterText" @closeTip="closeTip"></alter-tip>
    </div>
</template>
<script>
import Header from "@/components/Header";
import AlterTip from '@/components/AlterTip';
import { setPassword } from '@/service/api';
import { mapState } from 'Vuex';

export default {
    data() {
        return {
            oldPassword: '',
            password: '',
            confirmPassword: '',
            showAlert: false,
            alterText: '',
        }
    },
    computed: {
        ...mapState([
            'userInfo'
        ])
    },
    components: {
        Header,
        AlterTip,
    },
    methods: {
        async onEdit() {
            if(!this.oldPassword) {
                this.alterText = '旧密码不能为空';
                this.showAlert = true;
                return;
            }else if(!this.password) {
                this.alterText = '新密码不能为空';
                this.showAlert = true;
                return;
            }else if(!this.confirmPassword) {
                this.alterText = '确认密码不能为空';
                this.showAlert = true;
                return;
            }else if(this.confirmPassword!==this.password) {
                this.alterText = '两次密码不一致';
                this.showAlert = true;
                return;
            }else {
                const result = await setPassword({oldPassword: this.oldPassword, password: this.password, confirmPassword: this.confirmPassword, user_id: this.userInfo.user_id});
                if(result.status === 1) {
                    var self = this;
                    setTimeout(function() {
                        self.$router.go(-1);
                        return;
                    }, 1000);
                    this.alterText = result.message;
                    this.showAlert = true;
                }else {
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
        background-color: #4cd964;
        padding: .5rem 0;
        border: 1px;
        border-radius: 0.15rem;
        text-align: center;
    }
</style>


