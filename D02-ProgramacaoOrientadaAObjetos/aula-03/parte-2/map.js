arr = [4, 5, 6, 7, 8, 9, 10];

let newArr = arr.map((item) => item * 2);
console.log(newArr);

newArr = arr.map((item) => ({ x: item, y: item * 2 }));
console.log(newArr);
