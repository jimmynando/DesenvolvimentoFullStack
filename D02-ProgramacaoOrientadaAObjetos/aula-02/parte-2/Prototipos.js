function Pessoa(nome, anoDeNascimento, profissao) {
  this.nome = nome;
  this.anoDeNascimento = anoDeNascimento;
  this.profissao = profissao;
  this.calculaIdade = function () {
    return new Date().getFullYear() - this.anoDeNascimento;
  };
}

const pessoa = new Object();

pessoa.nome = "Fernando";
pessoa["anoDeMascimento"] = 1990;
pessoa.profissao = "Estudante";
pessoa.calculaIdade = function () {
  return new Date().getFullYear() - this.anoDeNascimento;
};

const pessoa2 = Object.create(pessoa);
const pessoa1 = new Pessoa("Fernando", 1990, "Estudante");
const pessoa3 = Object.create(pessoa1);

function descobreTipo(objeto) {
  if ("Object" === objeto.constructor.name) {
    console.log("é um objeto raiz");
  } else {
    console.log("é um objeto do tipo", objeto.constructor.name);
  }
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa2) === pessoa);

console.log(Object.getPrototypeOf(pessoa1));
console.log(Object.getPrototypeOf(pessoa3) === pessoa1);

Pessoa.prototype.saudar = function () {
  console.log("Olá");
};