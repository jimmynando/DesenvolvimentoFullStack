arr = [4, 5, 6, 7, 8, 9, 10];

arr.forEach((item) =>
  console.log(`${item} -> ${item % 2 === 0 ? "par" : "impar"}`)
);

numDivisores = (item) => {
  let nDiv = 0;

  for (let div = 1; div <= item; div++) {
    if (item % div === 0) nDiv++;
  }

  return nDiv;
};

arr.forEach((item) => console.log(`${item} -> ${numDivisores(item)}`));
