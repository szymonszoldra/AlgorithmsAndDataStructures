/*
 *
 *  My implementation of BinarySearchTree using JS object
 *  
 */

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //Create Node to DRY
  createNode(value) {
    return {
      value: value,
      left: null,
      right: null
    }
  }

  //Insert value into Tree
  insert(value) {
    const node = this.createNode(value);

    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;

      while (true) {
        if (node.value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  //Find if there is such value in the Tree, it returns either the node or null
  find(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }
}

/*
 *
 *  Test
 *  
 */

//Initialization
const exampleTree = new BinarySearchTree();

exampleTree.insert(5);
exampleTree.insert(11);
exampleTree.insert(3);
exampleTree.insert(1);
exampleTree.insert(4);
exampleTree.insert(10);
exampleTree.insert(99);

/*  the Tree is Now
 *
 *        5
 *      /   \
 *     3     11
 *    / \   /  \
 *   1   4 10   99
 */

console.log(exampleTree.find(22)); //null
console.log(exampleTree.find(11));
//  |
//  V

//{value: 11, left: {value: 10, left: null, right: null}, right: {value: 99, left: null, right: null}}