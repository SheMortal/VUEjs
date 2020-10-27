import Vue from "vue";
import App from "./Blog.vue";
// import App from "./Apps.vue";
// import App from "./App.vue";

// using vue-resource
import VueResource from "vue-resource";
Vue.use(VueResource);


// using custom directives
// globally
Vue.directive('theme', {
  bind(el, binding, vnode){

    // checks the value property on the binding
    if (binding.value == 'wide'){
      el.style.maxWidth = '1200px';
    } else if (binding.valie == "narrow"){
      el.style.maxWidth = '560px';
    }

    if(binding.arg == 'column'){
      el.style.background = "#ddd",
      el.style.padding = '20px'
    }
  }
})

// using filers
Vue.filter('to-uppercase', function(value){
    return value.toUpperCase();
});
// shortening characters
Vue.filter('snippet', function(value){
  return value.slice(0,100)+'...';
})

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
