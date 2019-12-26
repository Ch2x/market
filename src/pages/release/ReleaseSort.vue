<template>
    <div class="releaseSort_page">
        <Header go-back="true"></Header>
        <section>
            <ul class="sortLists">
                <li v-for="item in sortLists" :key="item.sort_id" @click="listClick(item.sort_id)">
                    <span>{{item.sortName}}</span>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import Header from "@/components/Header";
import { mapMutations } from 'vuex';
import { getSorts } from "../../service/api";

export default {
    data() {
        return {
             sortLists: [],
        }
    },
    components: {
        Header,
    },
    mounted() {
        this.init();
    },
    methods: {
        ...mapMutations([
            'saveSort',
        ]),
        listClick(index) {
            this.saveSort(this.sortLists[index-1]);
            this.$router.go(-1);
        },
        async init() {
            const result = await getSorts();
            this.sortLists = result;
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
