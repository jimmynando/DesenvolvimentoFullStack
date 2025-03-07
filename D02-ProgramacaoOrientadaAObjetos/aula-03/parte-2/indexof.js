let a = [1, 2, 3, 4, 5];

// console.log(a.indexOf(5, 2));
// console.log(a.lastIndexOf(5, 5));
// console.log(a.includes(0));

const i = a.findIndex((item) => item > 5);
const j = a.find((item) => item >= 5);
// console.log(j);

a.forEach((item, index) => console.log(`${index} -> ${item}`));

let aToSort = [5, 4, 3, 2, 1];

console.log(aToSort.sort());
console.log(
  aToSort.sort((x, y) => {
    if (y > x) return 1;
    if (y < x) return -1;
    return 0;
  })
);
