<template>
  <div class="paddingTop search_page">
      <Header go-back='true' head-title="搜索"></Header>
      <form class="search_form">
            <input type="search" name="search" placeholder="请输入商品名称" class="search_input" v-model="searchValue">
            <input type="submit" name="submit" class="search_submit" @click.prevent="submit">
      </form>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
    data() {
        return {
            searchValue: '',
        }
    },
    components: {
        Header,
    },
    methods: {
        async submit() {

        }

    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/mixin';

    .search_form{
        background-color: #fff;
        padding: 0.5rem;
        display: flex;
        input{
            height: 1.5rem;
        }
        .search_input{
            flex: 4;
            border: 0.025rem solid #e4e4e4;
            @include sc(0.65rem, #333);
            border-radius: 0.125rem;
            background-color: #f2f2f2;
            font-weight: bold;
            padding: 0 0.25rem;
        }
        .search_submit{
            flex: 1;
            border: 0.025rem solid #3190e8;
            margin-left: .2rem;
            @include sc(0.65rem, #fff);
            border-radius: 0.125rem;
            background-color: #3190e8;
            font-weight: bold;
            padding: 0 0.25rem;
        }
    }
</style>

