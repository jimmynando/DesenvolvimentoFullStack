() => console.log("no params");

var printMessage = (_) => console.log("no params");
printMessage();

var sum = (x, y) => x + y;
console.log(sum(1, 2));

var sum = (x, y) => {
  return x + y;
};
console.log(sum(4, 97));

var biggerThan = (x, y) => (x > y ? x : y);
console.log(biggerThan(10, 1));

var biggerThan = (x, y) => {
  if (x > y) {
    return x;
  }

  return y;
};
console.log(biggerThan(10, 1));

