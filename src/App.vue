<template>
  <div id="app">
    <!-- <h3>{{title}}</h3>
    <ninjas></ninjas> -->
    <vueHeader></vueHeader>
    <vueContent></vueContent>
    <vueFooter></vueFooter>
  </div>
</template>

<script>

// nesting and registering a component locally
import Ninjas from "./Ninjas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Games from "./components/Games";

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
      title: "NinjaApp",
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

  }
}
</script>

<style scoped>
h3{
  color: brown;
}
</style>
