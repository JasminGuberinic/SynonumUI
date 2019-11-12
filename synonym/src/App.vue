<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/synonym-logo.png">
    <Synonym msg="Welcom to synonym"/>
  </div>
</template>

<script>
import Synonym from './components/Synonym.vue'

export default {
  name: 'app',
  components: {
    Synonym
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
