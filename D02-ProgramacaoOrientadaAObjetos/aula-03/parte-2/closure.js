function somaValores(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

var soma5 = somaValores(5);

console.log(soma5(5)(5));

// console.log(somaValores(5)(2)(3));
