<template>
  <div id="app">
      <div class="slider_burger">
        <Burger />
      </div>
      <div>
        <Slider />
      </div>
    <router-view/>
  </div>
</template>


<script>
import Burger from "@/components/Burger.vue"
import Slider from "@/components/Slider.vue"


export default{
  components:{
    Burger, Slider
  }
}

</script>


<style lang="scss">
@import "@/assets/styles.scss";

.slider_burger{
  margin-top: 20vw;
}

.slider_burger{
  display: flex;
  flex-direction: column;
}

</style>
