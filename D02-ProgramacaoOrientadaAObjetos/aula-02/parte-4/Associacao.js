class Nota {
  constructor(disciplina, grau) {
    this.disciplina = disciplina;
    this.grau = grau;
  }
}

class Estudante {
  #matricula;
  notas = [];

  constructor(nome, anoDeNascimento, matricula) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.#matricula = matricula;
  }

  get matricula() {
    return this.#matricula;
  }

  set matricula(matricula) {
    this.#matricula = matricula;
  }
}

const aluno1 = new Estudante("Fernando", 1990, 21008);

aluno1.notas = [
  new Nota("POO", 10),
  new Nota("Algoritmos", 9),
  new Nota("Devops", 10),
];

console.log(aluno1);
