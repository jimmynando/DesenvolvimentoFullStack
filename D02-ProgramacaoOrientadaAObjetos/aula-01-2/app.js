let pessoa = {
  nome: "Fernando", // membro name and value
  idade: 34,
  saudar: function () {
    console.log("Olá");
  },
};

let newPessoa = {
  nome: "Maria",
  idade: 8,
  saudar: () => {
    // arrow function / lambda function
    console.log("Olá!!!!!");
  },
};

console.log(pessoa.nome);
console.log(pessoa["nome"]);

pessoa["nome"] = "João";
pessoa.saudar = function(name) {
  console.log(`meu nome é ${name} e eu te saúdo`);
};

console.log(pessoa);

pessoa.saudar(pessoa.nome);
newPessoa.saudar();
