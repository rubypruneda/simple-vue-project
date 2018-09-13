<template>
  <div class="hello">
    <div class='holder'>
    <form @submit.prevent="addFav">
      <input type="text" placeholder="Enter your favorite.. Anything!"  v-model="fav" v-validate = "'min:3'" name = 'favorite'>
      <p class = 'alert' v-if="errors.has('favorite')">{{ errors.first('favorite')}}</p>
    </form>
      <ul>
        <transition-group name='what' enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(info, index) in favs" :key="index"> {{info.fav}}
            <i class='fa fa-minus-circle' v-on:click="remove(index)"></i>
          </li>
        </transition-group>
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
       
     ]
    }
  },
  methods : {
      addFav(){
        this.$validator.validateAll().then(result => {
          if(result) {
            this.favs.push({fav: this.fav});
            this.fav = '';
          } else {
            console.log('Not valid. Sorry!')
          }
        })  
      },
      remove(id) {
        this.favs.splice(id,1)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
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

  i {
    float: right;
  }
</style>
