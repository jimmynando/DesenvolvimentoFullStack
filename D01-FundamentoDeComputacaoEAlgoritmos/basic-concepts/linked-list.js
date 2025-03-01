class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  add(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  print() {
    let current = this.head;

    while (current != null) {
      console.log(current);
      current = current.next;
    }
  }
}

let myLL = new LinkedList();

myLL.add(1);
myLL.add(2);
myLL.add(3);
myLL.add(3);
myLL.add(3);
myLL.add(3);
myLL.add(3);
myLL.add(3);
myLL.add(3);
myLL.print();
