let num1 = 10;
let num2 = 20;

function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(num1, num2);

console.log(result);
// Procedural

const calculadora = {
  num1: 10,
  num2: 20,
  soma() {
    return this.num1 + this.num2;
  },
};

console.log(calculadora.soma());
// POO
