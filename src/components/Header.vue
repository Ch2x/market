<template>
    <header id='header_top'>
        <section class="header_goback" v-if="goBack" @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <section class="header_title" v-if="headTitle">
            <span class="header_text">{{headTitle}}</span>
        </section>
    </header>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['goBack', 'headTitle'],
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/mixin';

    #header_top {
        display: flex;
        // align-items:center;
        background: rgb(52, 158, 223);
        position: fixed;
        z-index: 99;
        left: 0;
        top: 0;
        @include wh(100%, 1.95rem);
    }
    .header_goback {
        left: 0.5rem;
        @include wh(0.6rem, 1rem);
        line-height: 2.2rem;
        margin-left: .4rem;
    }
    .header_title {
        color: #fff;
        text-align: center;
        line-height: 1.8rem;
        margin-left: .6rem;
        .header_text {
            @include sc(0.8rem, #fff);
            text-align: center;
            font-weight: bold;
        }
    }
</style>


