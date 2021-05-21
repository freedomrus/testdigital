<template>
  <div class="wrapper">
    <main class="main">
      <div class="container">
        <div class="container__shadow">
          <section class="descr">
            <div class="logo">

            </div>
            <div class="text__block">
              <p class="title">
                Наша команда
              </p>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolores expedita facilis illum minus. Distinctio?
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "MainPage"
}
</script>

<style scoped lang="scss">
@import "src/assets/styles.scss";
  .container {
    width: size(1500, 1920) !important;
    border: 1px solid red;
    margin: auto;
  }
.container__shadow{
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.descr{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    width: size(150, 1920);
    height: size(150, 1920);
    background-color: gray;
  }
  .text__block{
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: space-between;
    .title{
      font-family: 'Montserrat', sans-serif !important;
      font-weight:  600;
      font-size: size(48, 1920)
    }
    .text{
      font-size: size(24, 1920)
    }
  }
}
</style>