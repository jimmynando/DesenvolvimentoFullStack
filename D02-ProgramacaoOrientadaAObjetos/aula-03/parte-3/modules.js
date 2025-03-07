class Circulo {
  constructor(r) {
    this.raio = r;
  }

  area() {
    return (Math.PI * this.raio ** 2).toFixed(2);
  }

  circunferencia() {
    return (2 * Math.PI * this.raio).toFixed(2);
  }
}

module.exports = Circulo;
