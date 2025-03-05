const empregado = {
  salarioBase: 5000,
  valorHoraExtra: 100,
  qtdHoraExtra: 10,
  calculaSalario: function () {
    return this.salarioBase + this.valorHoraExtra * this.qtdHoraExtra;
  },
};

const empregado1 = {
  salarioBase: 5000,
  valorHoraExtra: 100,
  qtdHoraExtra: 10,
  calculaSalario: function () {
    return this.salarioBase + this.valorHoraExtra * this.qtdHoraExtra;
  },
};

empregado1.saudar = function () {
  console.log("Olá");
};

console.log(empregado.calculaSalario());
empregado1.saudar();
