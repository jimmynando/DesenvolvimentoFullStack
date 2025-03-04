const empregado = {
  salarioBase: 5000,
  valorHoraExtra: 100,
  qtdHoraExtra: 10,
  calculaSalario: function () {
    return this.salarioBase + this.valorHoraExtra * this.qtdHoraExtra;
  },
};

console.log(empregado.calculaSalario());
