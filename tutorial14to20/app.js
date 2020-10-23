// external shared data(when changed, will update in all instances)
var data = {
  sharedName: "Zoe",
};

// Reusable components in vue instances
Vue.component("greeting", {
  // template will dispaly as a reuseable component
  template:
    '<p>This is {{name}}. <button v-on:click="changeName">Change name</button></p>',
  // passing through data in components as a function that retuns objects
  data: function () {
    return { name: "Sea" };
    // return this.sharedName;
  },
  methods: {
    changeName: function () {
      this.name = "Ocean";
    },
  },
});

// give them names(one/two) to enable referencing
var one = new Vue({
  el: "#root1",
  data: {
    title: "VueApp One Ttile",
  },
  methods: {
    greet: function () {
      return "Sup, VueApp One";
    },
  },
});

var two = new Vue({
  el: "#root2",
  data: {
    title: "VueApp Two Ttile",
    type: "Won't view",
  },
  methods: {
    greet: function () {
      return "Awe, VueApp Two";
    },
    change_title: function () {
      one.title = "Title changed";
    },
  },
});
two.type = "Will view";

// root
new Vue({
  el: "#root",
  data: {
    output: "Your input",
  },
  methods: {
    readRefs: function () {
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    },
  },
});
