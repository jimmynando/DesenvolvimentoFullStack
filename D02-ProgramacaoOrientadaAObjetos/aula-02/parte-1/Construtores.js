function Pessoa(nome, anoDeNascimento, profissao) {
  this.nome = nome;
  this.anoDeNascimento = anoDeNascimento;
  this.profissao = profissao;
  this.calculaIdade = function () {
    return new Date().getFullYear() - this.anoDeNascimento;
  };
}

const pessoa = new Pessoa(["Fernando", "Goncalves"], 1990, "Estudante");

console.log(pessoa.calculaIdade());
