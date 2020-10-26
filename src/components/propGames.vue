<template>
  <div id="games">
      <ul>
          <li v-for="game in games" v-on:click="game.show = !game.show" :key="game">
              <h2>Game: {{game.name}}</h2>
              <h3 v-show="game.show">Year released: {{game.year}}</h3>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {

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
