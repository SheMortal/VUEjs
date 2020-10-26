<template>
  <header>
      <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  components:{
  },
  data () {
    return {
        title: 'Vue Games'
    }
  },
  methods: {

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
