<template>
  <header>
      <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    },
  components:{
  },
  data () {
    return {
        title: 'VueApp Games'
    }
  },
  methods: {
      changeTitle: function(){
          this.title = 'Gamers Center'
      }
  }
}
</script>

<style>
header{
    background:rgb(25, 90, 133);
    padding: 10px;
}
h1{
    color: rgb(252, 252, 252);
    text-align: center;
}
</style>
