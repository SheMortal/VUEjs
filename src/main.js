import Vue from "vue";
import App from "./App.vue";

// registering a component globally
// Vue.component("nameOfComp", importedExport)
// import Ninjas from "./Ninjas.vue";
// Vue.component("ninjas", Ninjas);


new Vue({
  el: "#app",
  render: h => h(App)
});
