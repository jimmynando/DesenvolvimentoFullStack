function funcaoSemRetorno() {
  //   console.log("Hello World!");
}

function funcaoComRetorno() {
  return "Olá Mundo!";
}

let msg = funcaoSemRetorno();
// console.log(msg);

let msgReturn = funcaoComRetorno();
// console.log(msgReturn);

function potencia(base, expoente = 2) {
  let result = 1;

  for (let cont = 0; cont < expoente; cont++) {
    console.log(result, base);
    result *= base;
  }

  return result;
}

console.log(potencia(4, 4));
