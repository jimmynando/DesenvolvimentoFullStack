arr = [4, 5, 6, 7, 8, 9, 10];

let result = arr.reduce(
  (prevValue, currentValue) =>
    (prevValue += currentValue % 2 === 0 ? currentValue : 0),
  0
);

console.log(result);
