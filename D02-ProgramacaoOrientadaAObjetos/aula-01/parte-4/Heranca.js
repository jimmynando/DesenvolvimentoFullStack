class Animal {
  andar() {}
}

class Ave extends Animal {
  constructor() {
    super(); // needed to access parent's attributes (properties) and/or methods when using inheritance
  }
  voar() {
    this.andar();
  }
}
class Arara extends Ave {
  constructor() {
    super();
  }
}
class Cegonha extends Ave {}

class Mamifero extends Animal {}
class Cachorro extends Mamifero {}
class Homem extends Mamifero {}
