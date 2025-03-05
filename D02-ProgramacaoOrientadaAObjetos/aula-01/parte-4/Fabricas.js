function criarPessoa(pessoa) {
  const { nome, anoDeNascimento, profissao } = pessoa;

  return {
    nome,
    anoDeNascimento,
    profissao,
    calculaIdade: function () {
      return new Date().getFullYear() - this.anoDeNascimento;
    },
  };
}

const dadosPessoa = {
  nome: ["Fernando", "Gonçalves"],
  anoDeNascimento: 1990,
  profissao: "Programador",
};

const pessoa = criarPessoa(dadosPessoa);
console.log(pessoa.calculaIdade());
