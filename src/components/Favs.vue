<template>
  <div class="hello">
    <div class='holder'>
      <ul>
        <li v-for="(info, i) in favs" :key="i">{{i}}. {{info.favorite}}</li>
      </ul>
      <div v-bind:class="{alert: showAlert, 'classes': showClasses}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favs',
  data() {
    return {
     favs: [
       {'favorite': 'Family'},
       {'favorite': 'Pizza'},
     ],
     showAlert: true,
     showClasses: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.alert {
  width: 100%;
  height: 30px;
  background-color: pink;
}

.classes {
  border: 5px solid yellow;
}
</style>
