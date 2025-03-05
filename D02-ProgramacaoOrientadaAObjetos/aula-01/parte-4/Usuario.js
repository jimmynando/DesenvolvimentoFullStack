class Usuario {
  constructor(id, email, senha) {
    this.id = id;
    this.email = email;
    this.senha = senha;
  }

  login() {}
  trocarEmail() {}
  trocarSenha() {}
}

class Administrador extends Usuario {
  constructor(setor) {
    super();

    this.setor = setor;
  }

  autorizar() {}
  revogar() {}
  bloquear() {}
}

class Operador extends Usuario {
  constructor(equipe) {
    super();

    this.equipe = equipe;
  }

  gerarRelatorio() {}
  calcularTributos() {}
  trocarSenha() {} // example of polymorphism
}
