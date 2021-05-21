<template>
  <div id="app">
    <MainPage />
    <router-view/>
  </div>
</template>


<script>
import MainPage from "./views/MainPage";
export default {
  components:{MainPage}
}



</script>

<style lang="scss">
@import "@/assets/styles.scss";


</style>
