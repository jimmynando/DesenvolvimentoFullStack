export class Locadora {
  #_carros;

  constructor() {
    this.#_carros = [];
  }

  adicionaCarro(carro) {
    this.#_carros.push(carro);
  }

  consultaCarros() {
    this.#_carros.forEach((carro) =>
      console.log(`Carro placa ${carro.placa} tq: ${carro.tanque}`)
    );
  }

  abasteceCarro(index, quantidade) {
    this.#_carros[index].tanque = quantidade;
    if (index >= 0 && index < this.#_carros.length) {
    }
  }
}
