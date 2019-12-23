<template>
    <div class="sort_page">
        <Header head-title='分类'></Header>
        <section>
            <ul class="sortLists">
                <router-link :to="{path: '/sortList', query: {sort_id: item.sort_id, sortName: item.sortName}}" v-for="item in sortLists" :key="item.sort_id">
                    <li>
                        <span>{{item.sortName}}</span>
                    </li>
                </router-link>
            </ul>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSorts } from "../../service/api";

export default {
    data() {
        return {
            sortLists: []
        }
    },
    components: {
        Header,
        Footer,
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            const result = await getSorts();
            this.sortLists = result;
        }
    },
}
</script>

<style lang="scss" scoped>
    .sort_page {
        padding-top: 1.95rem;
    }
    .sortLists {
        li {
            padding: .5rem .5rem;
            background-color: #fff;
            margin-bottom: .3rem;
        }
    }
</style>
