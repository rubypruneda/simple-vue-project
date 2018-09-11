<template>
  <div id="app">
    <nav>
    <router-link to = '/' >Home</router-link>
    <router-link to = '/new' >New</router-link>
    <router-link to = '/ruby'>Ruby</router-link>
    </nav>
    <router-view/>
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
  padding-top: 50px;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}
nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: #66d9ff;
  font-weight: bold;
  margin-right: 15px;
}
</style>
