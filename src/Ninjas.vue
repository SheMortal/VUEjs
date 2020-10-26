<template>
 <div>
     <h3>List of Ninjas</h3>
    <ul>
        <li v-for="ninja in ninjas" :key="ninja">{{ninja}}</li>
    </ul>

    <h3>List of games</h3>
    <ul>
        <li v-for="game in games" :key="game">{{game}}</li>
    </ul>
 </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      ninjas: ["Yugi", "Yo", "Bambi"],
      games: ["Minecraft", "Apocoliptic", "Zen"]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
h3{
    color: cadetblue;
}
</style>      
