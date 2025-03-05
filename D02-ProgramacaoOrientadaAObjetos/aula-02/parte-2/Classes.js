class Pessoa {
  constructor(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
  }

  saudar() {
    console.log(`Olá eu sou ${this.nome}`);
  }

  calculaIdade() {
    return new Date().getFullYear() - this.anoDeNascimento;
  }
}

class Estudante extends Pessoa {
  constructor(nome, anoDeNascimento, profissao, matricula) {
    super(nome, anoDeNascimento, profissao);

    this.matricula = matricula;
  }

  saudar() {
    console.log("Olá colegas!");
  }
}

class Professor extends Pessoa {
  constructor(nome, anoDeNascimento, titulacao) {
    super(nome, anoDeNascimento, "Professor");

    this.titulacao = titulacao;
  }
}

const aluno = new Estudante("Gabriel", 1998, "Consultor de Vendas", 21007);

aluno.saudar();

const pessoa = new Pessoa("Fernando", 1990, "Estudante");

console.log(pessoa.calculaIdade());
