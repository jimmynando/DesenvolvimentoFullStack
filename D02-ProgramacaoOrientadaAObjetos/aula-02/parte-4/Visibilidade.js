class Estudante {
  #nome;

  constructor() {
    this.#nome = "Fernando";
  }

  get nome() {
    return this.#nome;
  }

  set nome(nome) {
    this.#nome = nome;
  }
}

const estudante = new Estudante();

estudante.nome = "Gabriela";

console.log(estudante);
