<template>
    <div class="sortList_page">
        <Header :head-title="sortName" go-back="true"></Header>
        <ShopList :sort='sortName'></ShopList>
    </div>
</template>

<script>
import Header from '@/components/Header';
import ShopList from '@/components/ShopList';
export default {
  data() {
      return {
          sortName: "",
      }
  },
  components: {
      Header,
      ShopList,
  },
  created() {
      this.sortName = this.$route.query.name;
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";

.sortList_page {
    padding-top: 1.95rem;
}
</style>

