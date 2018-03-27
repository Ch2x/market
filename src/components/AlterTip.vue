<template>
    <div class="AlterTip">
        <div class="Alter-content"> 
            <span>{{alterText}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: ['alterText'],
    mounted() {
        this.init();
    },
    methods: {
        init() {
            const self = this;
            setTimeout(function() {
                self.$emit('closeTip');
            }, 4000);
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin";
    .AlterTip {
        position: fixed;
    	top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
        .Alter-content {
            height: 1.8rem;
            background-color: rgba(29, 29, 29, 0.623);
            position: absolute;
            padding: 0 .8rem;
            bottom: 25%;
            left: 50%;
            transform: translate(-50%, 50%);
            >span {
                line-height: 1.8rem;
                @include sc(.5rem, #fff);
            }
        }
    }
</style>


