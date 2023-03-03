<template>
  <Navbar/>
  <router-view/>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  export default {
    components:{
      Navbar
    },
    setup(){

    },
  }
</script>
<style scoped>
html,body{
  background-color: #dad7cd;
}
</style>