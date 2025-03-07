let nomeCompleto = ["Fernando", "Galhardo", "Gonçalves"];
var [primeiroNome, nomeDoMeio, ultimoNome] = nomeCompleto;

console.log(primeiroNome, nomeDoMeio, ultimoNome);

var [primeiroNome, ...restante] = nomeCompleto;
console.log(primeiroNome, restante.toString().replace(",", " "));

var [soOPrimeiroNome, , soOUltimoNome] = nomeCompleto;
console.log(soOPrimeiroNome, soOUltimoNome);

export class UmaClasse {
  #_umAtributo;
  outroAtributo = "atributo dois";

  constructor(n) {
    this.#_umAtributo = n;
  }

  capturaPrimeiroAtributo() {
    return this.#_umAtributo;
  }
}

let umaClasse = new UmaClasse("atributo um");

let { capturaPrimeiroAtributo: umAtributo, outroAtributo } = umaClasse;

console.log(umAtributo, outroAtributo);
