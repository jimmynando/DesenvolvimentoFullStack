import { Carro } from "./Carro.mjs";

var carro = new Carro(55);
console.log(carro.capacidadeDoTanque);
console.log(carro.tanque);

carro.tanque = 30;
console.log(carro.tanque);

carro.tanque = 30;
console.log(carro.tanque);

carro.tanque = 30;
console.log(carro.tanque);
