class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items);
  }
}

const stack = new Stack();

stack.push("Fernando")
stack.push("Gabriel")
stack.push("Bruna")
stack.push("Léia")
stack.print()
stack.pop()
stack.pop()
stack.pop()
stack.print()

