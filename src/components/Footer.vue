
<template>
  <footer>
      <p>{{copyright}} | {{title}}</p>
  </footer>
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
        copyright: 'Copyright 2020'
    }
  },
  methods: {

  },
//   use life-cycle hook to listen to the bus event
  created(){
      bus.$on('changedChanged', (data)=>{
          this.title = data;
      })
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
