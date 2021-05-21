<template>
  <div id="app">
    <div id="nav">
      <Burger />
    </div>
    <router-view/>
  </div>
</template>


<script>
import Burger from "@/components/Burger.vue"


export default{
  components:{
    Burger, 
  }
}

</script>


<style lang="scss">
@import "@/assets/styles.scss";



</style>
