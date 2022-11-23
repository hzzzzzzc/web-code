<template>
  <div class="header">
    <div class="header-name">
      {{name}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: "myTestProject",
    }
  }
}
</script>

<style scoped>
 .header{
  width: 100%;
  height: 20vh;
  background-color: rgb(214, 89, 89);
  /* position: absolute;
  top: 0; */
 }
</style>