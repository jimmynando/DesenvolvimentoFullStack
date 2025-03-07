import { area, circunferencia as circ, Circulo} from "./es6module.mjs";

console.log(`A area do circulo de raia 2 é ${area(2)}`);
console.log(`A circunferencia do circulo de raia 2 é ${circ(2)}`);

const c1 = new Circulo(4)
console.log(`A circunferencia do circulo de raia 2 é ${c1.circunferencia()}`);

