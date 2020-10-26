<template>
  <header>
      <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
// using bus events
import {bus} from "../main";

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
          //   changing prop values from root(title)
          this.title = 'Gamers Center'

        // using events
        // this.$emit('eventName', 'changeItTo')
        this.$emit("changedTitle", "Gamers Center")
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
