class Node {
  data = undefined;
  left = null;
  right = null;

  constructor(data: any) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class BinarySearchTree {
  root: null | any = null;

  constructor() {
    // root of a binary search tree
    this.root = null;
  }

  insert(data: any) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: any, newNode: any) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(node: any, data: any): any {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    }
    return node;
  }

  // function to be implemented
  // insert(data)
  // remove(data)

  // Helper function
  // findMinNode()
  // getRootNode()
  // inorder(node)
  // preorder(node)
  // postorder(node)
  // search(node, data)
}
