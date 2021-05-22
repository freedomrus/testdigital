<template>
  <div class="header">
    <div class="header__logo">
    </div>
    <div class="header__nav">
      <ul class="nav__container">
        <li><a href="">Главная</a></li>
        <li><a href="">Мероприятия</a></li>
        <li><a href="">Профиль</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped lang="scss">
@import "../assets/styles";
ul,li,a {
  text-decoration: none;
  font-size: size(24, 1920);
  color:white;
  font-family: 'Roboto', sans-serif;
}
li {
  margin-left: size(100, 1920)
}
ul{
  display: flex;
  justify-content: center;
}
.header{
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: size(25, 1920);
}
.logo__img {
  width: 52px;
  height: 52px;
  margin-left: size(210, 1920);
}
//.header__logo{
//}
.nav__container{
  width: size(960, 1920);
}
.header__nav{
  border-bottom: 2px solid #18A0FB;
  height: size(62, 1920);
}
//!!!media!!!
@media (max-width: 756px){
  ul,li,a{
    display:none;
  }
  .header{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    background: #18A0FB;
  }
  .logo__img {
    width: size(50, 756);
    height: size(50, 756);
    margin-left: size(100, 756);
  }
  .header__logo{
  }
  .nav__container{
    width: size(960, 756);
  }
  .header__nav{
    border-bottom: 2px solid #18A0FB;
    height: size(62, 756);
  }
}
</style>