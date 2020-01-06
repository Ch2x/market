<template>
    <div class="address_page">
        <Header go-back="true" head-title="收货地址">
            <router-link to="/addAddress" slot="add">
                <span class="addIcon">新增地址</span>
            </router-link>
        </Header>
        <ul>
            <li class="address_item" v-for="item in addressList" :key="item.address_id">
                <section class="address_section">
                    <div class="address_top">
                        <span>收货人:{{item.name}}</span>
                        <span>{{item.phone}}</span>
                    </div>
                    <p><span>收货地址：{{item.address}}</span></p>
                </section>
                <aside class="address_aside" @click="deleteAddress(item.address_id)">
                    <span>
                     <svg class="arrow-svg" fill="#bbb">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-delete"></use>
                    </svg>
                </span>
                </aside>
            </li>
        </ul>
    </div>
</template>
<script>
import Header from "@/components/Header";
import { getMyAddress, delAddress }  from '../../service/api';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            addressList: [],
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
    mounted() {
        this.init();
    },
    methods: {
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
        }   
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/mixin";
.address_page {
    padding-top: 1.95rem;
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
.address_aside {
    >span {
            display: inline-block;
            @include wh(1.2rem, 1.2rem);
            >svg {
              @include wh(100%, 100%);  
            }
        }
}
</style>

