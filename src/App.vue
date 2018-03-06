<template>
  <div id="app">
    <router-view/>
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

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
