class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, value) {
    if (!root) return false;

    if (value === root.value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else if (value > root.value) {
      return this.search(root.right, value);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(3);
bst.insert(14);
bst.insert(5);
bst.insert(7);

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 3));
console.log(bst.search(bst.root, 14));
console.log(bst.search(bst.root, 2));
