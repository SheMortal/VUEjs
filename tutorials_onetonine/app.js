new Vue({
  // string that selects which elements it will control
  el: "#app",
  // store all data with different objects
  data: {
    name: "Sea",
    age: 30,
    job: "Intern Dev",
    title_message: "This is called a dynamically bound title",
    vue_website: "https://vuejs.org/v2/guide/installation.html",
    fb_website:
      "https://firebase.google.com/?gclid=Cj0KCQjw28T8BRDbARIsAEOMBcy5Kk7xsP6BoMcmJAnDQjQjvtyKA1msiB3XdUhZyg-JFOJcZjMOrxIaAvyYEALw_wcB",
    other_website:
      "<a href='https://www.javascripttutorial.net/javascript-array-filter/'>Other website</a>",
    company: "Text input: LCStudio",
    seen: true,
    not_seen: false,
    mylist: [
      { text: "Learn Vue" },
      { text: "Finish my tasks" },
      { text: "Make 4 a number" },
      { number: "300" },
    ],
    reverse_message: "Click button to reverse message!",
    two_way_binding: "Binds message and input-editable",
    x: 0,
    y: 0,
    a: 10,
    b: 20,
  },
  // methods
  methods: {
    greet: function () {
      return "Good Morning";
    },
    // function with a parameter
    greetings: function (time) {
      return "Good " + time;
    },
    // accessing data in methods
    my_age: function () {
      return "Your age: " + this.age;
    },
    reverseMessage: function () {
      this.reverse_message = this.reverse_message.split("").reverse().join("");
    },
    add: function (num) {
      this.age += num;
    },
    subtract: function (num) {
      this.age -= num;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    disable_links: function () {
      alert("Sorry, This link was disabled!");
    },
    logName: function () {
      console.log("you've entered your name");
    },
    logAge: function () {
      console.log("you've entered your age");
    },
  },
  computed: {
    addToA: function () {
      return this.age + this.a;
    },
    addToB: function () {
      return this.age + this.b;
    },
  },
});
