<template>
    <div class="add_page">
        <Header go-back="true" head-title="新增地址"></Header>
        <form class="addForm">
            <section class="addInput_item">
                <span>联系人</span>
                <input type="text" placeholder="姓名" v-model="name">
            </section>
            <section class="addInput_item">
                <span>电话</span>
                <input type="text" placeholder="手机号码" v-model="phone">
            </section>
            <section class="addInput_item">
                <span>地址</span>
                <input type="text" placeholder="收货地址" v-model="address">
            </section>
            <section class="addInput_item">
                <span>邮政编号</span>
                <input type="text" placeholder="编号" v-model="postCode">
            </section>
            <!-- <section class="addCheck">
                <input type="checkbox" placeholder="编号" id="checkDafault" value="设置为默认收货地址" v-model="check">
                <label for="checkDafault">设置为默认收货地址</label>
            </section> -->
        </form>
        <div class="login_container" @click="saveAddress">保存</div>
        <alter-tip v-if="showAlert" :alterText="alterText" @closeTip="closeTip"></alter-tip>
    </div>
</template>
<script>
import Header from "@/components/Header";
import AlterTip from '@/components/AlterTip';
import { postAddress } from '../../service/api';  
import { mapState } from 'Vuex';

export default {
    data() {
        return {
            name: '',
            phone: '',
            address: '',
            postCode: '',
            check: false,
            showAlert: false,
            alterText: '',
        }
    },
    computed: {
        ...mapState([
            'userInfo',
        ])
    },
    components: {
        Header,
        AlterTip,
    },
    methods: {
        async saveAddress() {
            if(!this.name) {
                this.showAlert = true;
                this.alterText = '联系人不能为空';
                return;
            } else if(!this.phone) {
                this.showAlert = true;
                this.alterText = '手机号码不能为空';
                return;
            } else if(!this.address) {
                this.showAlert = true;
                this.alterText = '地址不能为空';
                return;
            } else if(!this.postCode) {
                this.showAlert = true;
                this.alterText = '邮政编码不能为空';
                return;
            }
            const reg = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/, 'g');
            if(!reg.test(this.phone)) {
                this.alterText = '请输入正确的11位手机号码';
                this.showAlert = true;
                return;
            }
            const reg1 = new RegExp(/^[1-9][0-9]{5}$/, 'g');
            if(!reg1.test(this.postCode)) {
                this.alterText = '请输入正确的6位邮政编码';
                this.showAlert = true;
                return;
            }
            const result = await postAddress({
                address: this.address, 
                phone: this.phone, 
                user_id: this.userInfo.user_id, 
                name: this.name, 
                postCode: this.postCode,
            })
            if(result.status === 1) {
                this.$router.go(-1);
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
        >label {
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

