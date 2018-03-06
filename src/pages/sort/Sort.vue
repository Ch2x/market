<template>
    <div class="sort_page">
        <Header head-title='分类'></Header>
        <section>
            <ul class="sortLists">
                <li v-for="(item, index) in sortLists" :key="index">
                    <router-link :to="{path: '/shopList', query: {name: item}}">
                        <span>{{item}}</span>
                    </router-link>
                </li>
            </ul>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        Footer,
    }
}
</script>

<style lang="scss" scoped>
    .sort_page {
        padding-top: 1.9rem;
    }
    .sortLists {
        >li {
            padding: .5rem .5rem;
            background-color: #fff;
            margin-bottom: .3rem;
        }
    }
</style>
