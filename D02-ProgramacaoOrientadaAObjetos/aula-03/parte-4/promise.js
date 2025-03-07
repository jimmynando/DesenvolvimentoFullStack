const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Sucesso!");
  }, 2000);
});

let ifSucceed = (successMessage) => {
  console.log(successMessage);
};

promise.then(ifSucceed);

console.log("Fim do programa!");

function fazAlgo() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pedido atendido"), 2000);
  });

  return promise;
}

console.log(fazAlgo());

async function main() {
  console.log(await fazAlgo());
}

main();
