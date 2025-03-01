function foo(arr) {
  let sum = 0; // constant
  let product = 1; // constant

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  } // n

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  } // n

  console.log(sum + ", " + product); // constant
} // O(n)

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
} // O(n²)
