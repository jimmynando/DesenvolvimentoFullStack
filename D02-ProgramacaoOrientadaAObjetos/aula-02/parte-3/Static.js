class ValidadorCPF {
  static TAMANHO_CPF = 11;

  static validar(cpf) {
    return cpf.length === this.TAMANHO_CPF;
  }
}

console.log(ValidadorCPF.validar("12231223122"));
console.log(ValidadorCPF.TAMANHO_CPF);
