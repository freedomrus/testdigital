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

import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper.scss';

export default{
  components:{
    Burger, Slider, Swiper, SwiperSlide,
  }
}

</script>


<style lang="scss">
@import "@/assets/styles.scss";


.slider_burger{
  display: flex;
  flex-direction: column;
}

</style>
