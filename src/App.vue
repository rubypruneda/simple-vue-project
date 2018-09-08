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
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #e6e6e6;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}
</style>
