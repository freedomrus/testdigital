<template>
  <div id="app">
    <router-link to="/">Main</router-link>
    <router-view/>
  </div>
</template>


<script>
export default {
  created() {
    this.$store.dispatch('categor/getAll') // dispatch - что то типа асинхронного метода (мутации)
    // она ВЫЗЫВАЕТ ЗАПРОС getAll, который уже передает данные в мутации,
    // а мутации записывают данные из запроса в actions
  },
  // ПЕРВЫМ вызывается created, пинает запрос, все записывается в переменные, а уже
  // заполненеы перменные кидаются к нам в computed
  // ВТОРЫМ вызывается компьютед
  computed: {
    posts() {
      return this.$store.getters['categor/getAllCategor'] // а эта штука уже ВЫЗЫВАЕТ ГЕТТЕР getPosts,
      // который УЖЕ НАПОЛНЕННЫЕ перемнные перкидывает сюда в компонент и записывает в posts
    }
  }
}
</script>

<style lang="scss">

@import "src/assets/styles.scss";

</style>
