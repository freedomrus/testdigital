<template>
  <div>
  <headerTopPage />
  <div class="wrapper">

    <main class="main">
      <div class="container">
        <section class="descr">
          <div class="top">
            <div class="logo">

            </div>
            <div class="text__block">
              <p class="title">
                Наша команда
              </p>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio ea, ipsum nemo nihil nostrum numquam optio porro quibusdam soluta sunt suscipit totam unde voluptates!
              </p>
            </div>
          </div>
          <div class="img">
            <img src="../assets/temp/team 1.png" alt="">
          </div>
        </section>
        <section class="feedback">
          <div class="feedback__text">
            <p class="title">Что пишут пользователи о нас</p>
            <p class="text">
             sse expedita hic, ipsa laudantium maxime nisi nostrum nulla numquam perspiciatis quam qui quia quibusdam quod reiciendis rem repudiandae saepe sed similique tempore, totam ut voluptatibus. Asperiores, dolorum ea. Accusamus architecto asperiores facere praesentium repellendus? Ipsam.
            </p>
            <a href="#">
              Отзывы
            </a>
          </div>
          <div class="img">
            <img src="../assets/temp/girl 1.png" alt="">
          </div>
        </section>
        <form action="" class="form">
          <p class="form__title">Отправка формы</p>
          <div class="form__items">
            <input type="text" placeholder="Email" class="mail">
            <textarea placeholder="Ваш комментарий"></textarea>
            <button>Отправить форму</button>
          </div>
        </form>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer"
import headerTopPage from "../components/MainPageComponents/headerTopPage";
export default {
  name: "MainPage",

  components: {
    Footer,
    headerTopPage
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles.scss";
  .container {
    width: size(1500, 1920);
    margin: auto;
    @media (max-width: 756px){
      width: 100%;
    }
  }

.descr{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 17px 4px rgba(34, 60, 80, 0.2);
  padding: size(69, 1920);
  .logo{
    min-width: size(150, 1920);
    height: size(150, 1920);
    background-color: gray;
    @media (max-width: 756px){
      display: none;
    }
  }
  .text__block{
    padding: 0;
    margin: 0;
    height: size(210, 1920) !important;
    display: flex;
    align-items: start;
    flex-direction: column;
    margin-left: size(65, 1920);
    .title{
      font-family: 'Montserrat', sans-serif !important;
      font-weight:  600;
      font-size: size(48, 1920);
      margin-bottom: size(9, 1920);
      @media (max-width: 756px){
        text-align: center;
        font-size: size(30, 756);
      }
      @media (max-width: 480px){
        text-align: center;
        font-size: size(35, 480);
      }
    }
    .text{
      font-size: size(24, 1920);
      @media (max-width: 756px){
        text-align: center;
        font-size: size(20, 756);
        margin-top: size(25, 756);
      }
      @media (max-width: 480px){
        text-align: center;
        font-size: size(20, 480);
      }
    }
    @media (max-width: 756px){
      align-items: center;
    }
  }
  .img{
    width: 100%;
    background-color: #0099FF;
    width: 100%;
    height: 100%;
    img{
      width: 100%;

      height: 100%;
    }
  }
  @media (max-width: 756px){
    width: 100%;
    height: size(500, 756);
  }
  @media (max-width: 480px){
    height: size(400, 480);
  }
}

.top{
  display: flex;
  @media (max-width: 756px){
    width: 100%;
    height: 100%;
  }
}

.feedback{
  display: flex;
  justify-content: space-between;
  margin-top: size(100, 1920);
  box-shadow: 0px 0px 17px 4px rgba(34, 60, 80, 0.2);
  padding: size(69, 1920);
  .feedback__text{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 50%;

    .title{
      font-size: size(48, 1920);
      font-weight: 600;
      margin-bottom: size(20, 1920);
      @media (max-width: 756px){
        font-size: size(35, 756);
      }
      @media (max-width: 480px){
        font-size: size(35, 480);
        text-align: center;
      }
    }
    .text{
      font-size: size(24, 1920);
      text-align: justify;
      padding-right: size(30, 1920);
      @media (max-width: 756px){
        font-size: size(20, 756);
        margin-top: size(30, 756);
      }
      @media (max-width: 480px){
        font-size: size(20, 480);
        text-align: center;
      }
    }
    a{
      text-decoration: none;
      color: #0099FF;
      font-size: size(24, 1920);
      width: size(273, 1920);
      height: size(60, 1920);
      font-weight: 600;
      box-shadow: -2px 3px 20px -8px rgba(34, 60, 80, 0.6);
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      @media (max-width: 756px){
        width: size(273, 756);
        height: size(60, 756);
        font-size: size(24, 756);
        margin-top: size(25, 756);
      }
      @media (max-width: 480px){
        margin-top: size(40, 480);
        height: size(60, 480);
        width: size(270, 480);
        font-size: size(24, 480);
      }
    }
    @media (max-width: 756px){
      width: 100%;
      align-items: center;
    }

  }
  .img{
    img{
      width: size(708, 1920);
      @media (max-width: 756px){
        display: none;
      }
    }
  }
  @media (max-width: 756px){
    height: size(320, 756);
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 480px){
    height: size(400, 480);
  }
}

.form{
  margin-top: size(100, 1920);
  margin-bottom: size(100, 1920);
  box-shadow: 0px 0px 17px 4px rgba(34, 60, 80, 0.2);
  padding: size(69, 1920);

  width: 100%;
  .form__title{
    font-weight: 600;
    font-size: size(48, 1920);
    color: #0099FF;
    @media (max-width: 756px) {
      text-align: center;
      font-size: size(35, 756);
      margin-bottom: size(40, 756);
    }
    @media (max-width: 480px){
      font-size: size(40, 480);
    }
  }
  .form__items{
    display: flex;
    flex-direction: column;
    .mail{
      outline: none;
      height: size(60, 1920);
      width: size(380, 1920);
      font-size: size(24, 1920);
      margin-top: size(40, 1920);
      @media (max-width: 756px) {
        width: 100%;
        height: size(50, 756);
        font-size: size(30 , 756);
      }
      @media (max-width: 480px){
        height: size(60, 480);
        font-size: size(30, 480);
      }
    }
    textarea{
      width: 100%;
      margin-top: size(40, 1920);
      height: size(360, 1920);
      outline: none;
      font-size: size(24, 1920);
      @media (max-width: 756px) {
        width: 100%;
        font-size: size(30 , 756);
      }
      @media (max-width: 480px){
        height: size(180, 480);
        font-size: size(30, 480);
      }
    }
    button{
      text-decoration: none;
      width: size(380, 1920);
      height: size(72, 1920);
      margin-top: size(40, 1920);
      font-size: size(24, 1920);
      outline: none;
      background-color: #0099FF;
      padding: 0;
      border: none;
      color: white;
      font-weight: 600;
      @media (max-width: 756px) {
        margin-top: size(40, 756);
        width: size(420, 756);
        height: size(60, 756);
        font-size: size(33, 756);
      }
      @media (max-width: 480px){
        height: size(60, 480);
        width: size(400, 480);
        font-size: size(30, 480);
      }
    }
    @media (max-width: 756px) {
      align-items: center;
    }
  }

  @media (max-width: 756px) {
    height: size(600, 756);
  }
  @media (max-width: 480px){
    height: size(470, 480);
  }

}
</style>