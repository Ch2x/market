<template>
  <div>
      <Header></Header>
      <form class="search_form">
            <input type="search" name="search" placeholder="请输入商品名称" class="search_input">
            <input type="submit" name="submit" class="search_submit" >
      </form>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
    data() {
        return {

        }
    },
    components: {
        Header,
    }
}
</script>

<style>

</style>

