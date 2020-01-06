<template>
    <div class="address_page">
        <Header go-back="true" head-title="选择地址">
            <router-link to="/add" slot="add">
                <span class="addIcon">新增地址</span>
            </router-link>
        </Header>
        <ul>
            <li class="address_item" v-for="(item, index) in addressList" :key="index" @click="chooseClick(index)">
                <section class="address_section">
                    <div class="address_top">
                        <span>收货人:{{item.name}}</span>
                        <span>{{item.phone}}</span>
                    </div>
                    <p><span>收货地址：{{item.address}}</span></p>
                </section>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from "@/components/Header";
import { getMyAddress, delAddress }  from '../../service/api';
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            addressList: [],
        }
    },
    computed: {
        ...mapState([
            'userInfo','newAddress',
        ])
    },
    components: {
        Header,
    },
    mounted() {
        this.init();
    },
    methods: {
        ...mapMutations([
            'chooseAddress',
        ]),
        async init() {
            const result = await getMyAddress({user_id: this.userInfo.user_id});
            this.addressList = result;
        },

        async deleteAddress(id) {
            const result = await delAddress(this.userInfo.user_id, id);
            if(result.status === 1) {
                console.log('成功');
                this.init();
            }
        },
        
        async chooseClick(index) {
            this.chooseAddress({address: this.addressList[index]});
            this.$router.go(-1);
        }
    },
    watch: {
        newAddress: function(value) {
            this.init();
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/mixin";
.address_page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    z-index: 199;
    padding-top: 1.95rem;
    p, span{
        font-family: Helvetica Neue,Tahoma,Arial;
    }
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
    padding-right: .6rem;
    .address_top {
        >span {
            &:last-child {
                float: right;
            }
        }
    }
}
</style>

