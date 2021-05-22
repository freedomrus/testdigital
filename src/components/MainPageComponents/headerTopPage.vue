<template>
  <div>
    <div class="main">
      <Header />
      <div class="main__block">
        <span class="block__title">Lorem Lorem</span>
        <p class="block__text">
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
        <button class="block__button">button</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: "MainPage",
  components:{Header}
}
</script>

<style scoped lang="scss">
@import "src/assets/functions";
.main{
  background: url("./src/assets/temp/fon.png") no-repeat;
  height: 100vh;
  background-size: 100%;
}
.block__text,.block__title{
  color:white;
  font-family: 'Montserrat', sans-serif;
}
.main__block{
  width: size(480, 1920);  display: flex;
  flex-direction: column;
  margin-top: size(268, 1920);
  margin-left: size(210, 1920);
}
.block__title {
  font-size: 65px;
  font-weight: 800;
  margin-bottom: size(44, 1920);
}
.block__text{
  font-size: 24px;
  margin-bottom: size(86, 1920);
  width: size(410, 1920);
}
.block__button {
  width: size(210, 1920);
  height: size(60, 1920);
  background: #0099FF;
  box-sizing: border-box;
  border-radius: 3px;
  border: 0;
  color:white;
}
.block__button:active{
  box-shadow: 0 0 40px rgba(0, 0, 0, .1) inset;
}
//!!!media!!!
@media (max-width: 756px){
  .main{
    background: none;
  }
}
</style>