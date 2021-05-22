<template>
  <div id="app">
      <div class="slider_burger">
        <Burger />
      </div>
        <Slider />
    <router-view/>
  </div>
</template>


<script>
import Burger from "@/components/Burger.vue"
import Slider from "@/components/Slider.vue";

export default{
  components:{
    Burger, 
    Slider
  },

}

</script>


<style lang="scss">
@import "@/assets/styles.scss";


.slider_burger{
  display: flex;
  flex-direction: column;
}

    .carousel {
        position:relative;
        overflow: hidden;
        width: 800px;
        z-index:10;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        position:absolute;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }

</style>
