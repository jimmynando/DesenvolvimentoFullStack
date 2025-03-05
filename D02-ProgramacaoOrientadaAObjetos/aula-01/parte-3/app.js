let people = {
  name: "Fernando",
  age: 34,
  greet: function() {
    console.log(`My name is ${this.name} and I greet you`);
  },
  greet() {
    console.log(`My name is ${this.name} and I greet you!!!!`);
  },
  greetArrow: () => {
    console.log(`My name is ${this.name} and I greet you`);
  }, // this can't access this cause......
  
  // arrow functions should not be used as methods according to the mdn web docs
  // they don't have bindingd to this, arguments or super
};

people.greet();
