<template>
  <div id="app">
    <!-- <h3>{{title}}</h3>
    <ninjas></ninjas> -->


    <!-- listen to events defined in child components(v-on:eventName="rootFunction($eventData)") -->
    <vueHeader v-bind:title="title" v-on:changedTitle="updateTitle($event)"></vueHeader>
    <!-- props using v-bind -->
    <vueContent v-bind:games="games" ></vueContent>
    
    <vueFooter v-bind:title="title"></vueFooter>
  </div>
</template>

<script>

// nesting and registering a component locally
import Ninjas from "./Ninjas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Games from "./components/propGames";

export default {
  components:{
    // 'component_name': importedExport
    'ninjas': Ninjas,
    'vueHeader': Header,
    'vueContent': Games,
    'vueFooter': Footer
  },
  data () {
    return {
      title: "Vue Games",
      // using props
      games: [
          {name: 'Minecraft', year: '2000', show: false},
          {name: 'DOOM Eternal', year: '2003', show: false},
          {name: 'Ghost of Tsushima', year: '2011', show: false},
          {name: 'Call of Duty', year: '1977', show: false},
          {name: 'Gears Rebirth', year: '2009', show: false},
          {name: 'FIFA 21', year: '2020', show: false},
      ]
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle
    }
  }
}
</script>

<style scoped>
h3{
  color: brown;
}
</style>
