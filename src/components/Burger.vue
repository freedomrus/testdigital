<template>
    <div class="burger">
        <Slide right class="burger" :crossIcon = " right ">
            <a class="home" href="#">
                <div>Главная</div>
            </a>
            <a class="home" href="#">
                <div>Мероприятия</div>
            </a>
            <a class="home" href="#">
                <div>Профиль</div>
            </a>
    </Slide>
    </div>
</template>


<style lang="scss" scoped>
@import "@/assets/styles.scss";

.burger{
    display: none;
}

@media screen and (max-width: 480px){
    .burger{
        display: block;
    }

    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      cursor: pointer;
    }

    .home{
        display: flex;
        color: white;
        font-family: $roboto;
        font-size: size(27, 480);
    }

    .line-style {
      position: absolute;
      height: size(20, 48);
      background-color: red;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
      height: size(100, 480) !important;
      width: size(100, 480) !important  ;
    }
    .bm-cross-button {
      height: size(24, 480);
      width: size(24, 480);
    }
    .bm-menu {
      height: 100%; 
      width: 0; 
      position: fixed; 
      z-index: 1000; 
      top: 0;
      left: 0;
      background-color: rgb(115, 115, 201); 
      overflow-x: hidden; 
      padding-top: 60px; 
      transition: 0.5s; 
    }
 
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
}
</style>

<script>
import { Slide } from 'vue-burger-menu' 

export default {
components:{
    Slide 
  }
    
}
</script>

