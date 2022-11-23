<template>
  <div id="app">
    <my-header/>
  </div>
</template>

<script>
import myHeader from './components/myHeader.vue'
export default {
  name: 'App',
  components: {
    myHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
