<template>
    <div class="releaseSort_page">
        <Header go-back="true"></Header>
        <section>
            <ul class="sortLists">
                <li v-for="(item, index) in sortLists" :key="index" @click="listClick(index)">
                    <span>{{item}}</span>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import Header from "@/components/Header";
import { mapMutations } from 'Vuex';

export default {
    data() {
        return {
             sortLists: [
                '手机数码','图书教材','家用电器','运动户外','美妆','衣服','游戏'
            ]  
        }
    },
    components: {
        Header,
    },
    methods: {
        ...mapMutations([
            'saveSort',
        ]),
        listClick(index) {
            this.saveSort({sort: this.sortLists[index]});
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .releaseSort_page {
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
    .sortLists {
        >li {
            padding: .5rem .5rem;
            background-color: #fff;
            margin-bottom: .3rem;
            >span {
                display: inline-block;
                width: 100%;
            }
        }
    }
</style>
