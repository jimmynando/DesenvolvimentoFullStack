arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let incrementAfter = 0;
let incrementBefore = 0;

for (item of arr) {
  console.log(incrementAfter++, ++incrementBefore);
}
