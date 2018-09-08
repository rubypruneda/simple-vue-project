<template>
  <div class="hello">
    <div class='holder'>
    <form @submit.prevent="addFav">
      <input type="text" placeholder="Enter your favorite.."  v-model="fav">
    </form>
    <p>{{fav}}</p>
      <ul>
        <li v-for="(info, i) in favs" :key="i"> {{info.fav}}</li>
      </ul>
      <p>Here are you favorites!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favs',
  data() {
    return {
      fav: '',
     favs: [
       {'fav': 'Family'},
       {'fav': 'Pizza'}
     ]
    }
  },
  methods : {
      addFav(){
          this.favs.push({fav: this.fav});
          this.fav = '';
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

.holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #99e6ff;
    border-left: 5px solid #80b3ff;
    margin-bottom: 2px;
    color: black;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
</style>
