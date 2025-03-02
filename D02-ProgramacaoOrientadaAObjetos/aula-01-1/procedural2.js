let extraHour = 100;
let amountHours = 20;
let payment = 5000;

function calcPayment(extraHour, amountHours) {
  return payment + extraHour * amountHours;
}

let total = calcPayment(extraHour, amountHours);

console.log(total);
