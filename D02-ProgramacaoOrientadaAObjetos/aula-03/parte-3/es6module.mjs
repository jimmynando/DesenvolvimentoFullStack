export const area = (r) => (Math.PI * r ** 2).toFixed(2);
export const circunferencia = (r) => (2 * Math.PI * r).toFixed(2);

export class Circulo {
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
