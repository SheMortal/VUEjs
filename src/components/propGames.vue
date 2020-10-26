<template>
  <div id="games">
      <ul>
          <li v-for="game in games" v-on:click="game.show = !game.show" :key="game">
              <h2>Game: {{game.name}}</h2>
              <h3 v-show="game.show">Year released: {{game.year}}</h3>
          </li>
      </ul>
      <button v-on:click="deleteGame">Delete Game</button>
  </div>
</template>

<script>
export default {
    // using props
    props:["games"],
    // using validation(check if it's an array)
    // props: {
    //      games:{type: Array, required: true}
    // } if object is not type array, it will return an error in the console
  data () {
    return {
      
    }
  },
  methods: {
      deleteGame: function(){
          this.games.pop()
      }
  }
}
</script>

<style scoped>
#games{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
}

</style>
