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
        props: ['alterText']
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin";
    @keyframes tipMove{
       0%   { transform: scale(1) }
       35%  { transform: scale(.8) }
       70%  { transform: scale(1.1) }
       100% { transform: scale(1) }
    }
    .AlterTip {
        position: fixed;
    	top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
        .Alter-content {
            animation: tipMove .4s ;
            background-color: rgba(128, 128, 128, 0.5);
            position: absolute;
            padding: 0 .6rem;
            bottom: 25%;
            left: 50%;
            transform: translate(-50%, 50%);
            >span {
                @include sc(.8rem, #000);
            }
        }
    }
</style>


