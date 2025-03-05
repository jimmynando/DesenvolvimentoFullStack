function criarPessoa() {
  return {
    nome: "Fulano de Tal",
    anoDeNascimento: 1990,
    profissao: "Estudante",
  };
}

const pessoa1 = criarPessoa();
const pessoa2 = pessoa1;

pessoa2.anoDeNascimento = 1983;

console.log(pessoa1, pessoa2);
