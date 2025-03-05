function Pessoa(nome, anoDeNascimento, profissao) {
  this.nome = nome;
  this.anoDeNascimento = anoDeNascimento;
  this.profissao = profissao;
  this.calculaIdade = function () {
    return new Date().getFullYear() - this.anoDeNascimento;
  };
}

const pessoa = new Object();
const pessoa2 = new Pessoa();

console.log(pessoa2); // nome, anoDeNascimento, profissao = undefined

pessoa2.constructor("Fernando", 1990, "Estudante")

console.log(pessoa2);
