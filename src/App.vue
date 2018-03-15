<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <svg-sprit></svg-sprit>
  </div>
</template>

<script>
import svgSprit from './components/Svg';

export default {
  name: 'App',
  components: {
    svgSprit,
  }
}
</script>

<style lang="scss">
@import './assets/style/common';

</style>
