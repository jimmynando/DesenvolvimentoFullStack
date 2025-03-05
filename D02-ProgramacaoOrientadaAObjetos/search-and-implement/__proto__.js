function Dude(name) {
  this.name = name;
}

const me = new Dude("Fernando");

console.log(me.__proto__ === Dude.prototype);

Dude.prototype.talk = function () {
  return "Talking";
};

console.log(me.talk());

// me = {} === const me = new Object()

const human = {
  walk: function () {
    return "Walking";
  },
};

const fernando = Object.create(human);

console.log(fernando.walk());
