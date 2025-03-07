import { Carro } from "./Carro.mjs";

export class CarroComPlaca extends Carro {
  #_placa;
  constructor(placa) {
    super(55);
    this.#_placa = placa;
  }

  get placa() {
    return this.#_placa;
  }
}
