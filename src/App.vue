<template>
  <div id="app">
    <Favs/>
  </div>
</template>

<script>
import Favs from './components/Favs.vue'

export default {
  name: 'app',
  components: {
    Favs
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
