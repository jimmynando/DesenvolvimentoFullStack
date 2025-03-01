class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.isEmpty()) return;

    this.items.shift();
  }
  peek() {
    if (this.isEmpty()) return;

    return this.items[0];
  }
  print() {
    console.log(this.items);
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();

queue.enqueue("Fernando");
queue.enqueue("Gabriel");
queue.enqueue("Bruna");
queue.enqueue("Léia");
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();

