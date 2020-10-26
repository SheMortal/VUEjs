
<template>
  <footer>
      <p>{{copyright}} | {{title}}</p>
  </footer>
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
        copyright: 'Copyright 2020'
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
