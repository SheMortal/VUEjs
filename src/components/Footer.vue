
<template>
  <footer>
      <p>{{copyright}}</p>
  </footer>
</template>

<script>
export default {
  components:{
  },
  data () {
    return {
        copyright: 'Copyright 2020 VueGames | @Sea'
    }
  },
  methods: {

  }
}
</script>

<style scoped>
footer{
    background:rgb(0, 0, 0);
    padding: 6px;
}
p{
    color: rgb(252, 252, 252);
    text-align: center;
}
</style>
