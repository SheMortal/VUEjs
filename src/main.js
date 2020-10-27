import Vue from "vue";
import App from "./Blog.vue";
// import App from "./Apps.vue";
// import App from "./App.vue";

// using vue-resource
import VueResource from "vue-resource";
Vue.use(VueResource);


// registering a component globally
// Vue.component("nameOfComp", importedExport)
// import Ninjas from "./Ninjas.vue";
// Vue.component("ninjas", Ninjas);

// creating an event bus- vue instance for App.vue
// export const bus = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
});
