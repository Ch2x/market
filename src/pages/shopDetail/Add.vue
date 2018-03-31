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
    </div>
</template>
<script>
import Header from "@/components/Header";
import { postAddress } from '../../service/api';  
import { mapState, mapMutations } from 'Vuex';

export default {
    data() {
        return {
            name: '',
            phone: '',
            address: '',
            postCode: '',
            check: false,
        }
    },
    computed: {
        ...mapState([
            'userInfo',
        ])
    },
    components: {
        Header,
    },
    methods: {
        ...mapMutations([
            'confirmAddress'
        ]),

        async saveAddress() {
            const result = await postAddress({
                address: this.address, 
                phone: this.phone, 
                user_id: this.userInfo.user_id, 
                name: this.name, 
                postCode: this.postCode,
            })
            if(result.status === 1) {
                this.confirmAddress({newAddress: true});
                this.$router.go(-1);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/mixin';

.add_page {
    position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f2f2f2;
        z-index: 205;
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
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

