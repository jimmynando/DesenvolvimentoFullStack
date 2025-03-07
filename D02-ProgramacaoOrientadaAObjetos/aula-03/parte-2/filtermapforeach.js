arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

numDivisores = (item) => {
  let nDiv = 0;

  for (let div = 1; div <= item; div++) {
    if (item % div === 0) nDiv++;
  }

  return nDiv;
};

arr
  .filter((num) => numDivisores(num) === 2)
  .map((item) => ({ x: item, par: item % 2 === 0 }))
  .forEach((obj) => console.log(`${obj.x} é par? ${obj.par}`));
