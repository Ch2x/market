<template>
    <header id='header_top'>
        <slot name='logo'></slot>
        <slot name='search'></slot>
        <section class="header_goback">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
    </header>
</template>

<script>
export default {
    data() {
        return {

        }
    },

}
</script>

<style lang="scss" scoped>
    @import '../assets/style/mixin';

    #header_top {
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
</style>


