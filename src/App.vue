<template>
  <div id="app">
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style>
@import '../static/styles/reset.css';
@import '../static/styles/global.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
