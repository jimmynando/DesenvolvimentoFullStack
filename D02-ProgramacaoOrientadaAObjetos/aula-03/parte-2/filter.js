arr = [4, 5, 6, 7, 8, 9, 10];

console.log(arr.filter((item) => item % 2 !== 0));

console.log(
  arr.filter((item) => {
    let nDiv = 0;

    for (let div = 1; div <= item; div++) {
      if (item % div === 0) nDiv++;
    }

    return nDiv === 2 ? true : false;
  })
);
