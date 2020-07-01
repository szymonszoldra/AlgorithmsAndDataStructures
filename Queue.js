/*
 *
 *  My implementation of Queue using LinkedList (made by JS object)
 *  
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  createNode(value) {
    return {
      value: value,
      next: null
    }
  }

  addToQueue(value) {
    const node = this.createNode(value);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.length) {
      return null;
    }

    const node = this.head;
    this.head = node.next;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
  }

  peek() {
    return this.head.value;
  }

  printQueue() {
    let currentNode = this.head;
    const arr = [];

    while (currentNode.next) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    if (!arr.length) {
      return null;
    }

    arr.push(currentNode.value);
    return arr.join(' -> ');
  }

}

/*
 *
 *  Test
 *  
 */

//Initialization
const exampleQueue = new Queue();

exampleQueue.addToQueue(1);
exampleQueue.addToQueue(2);
exampleQueue.addToQueue(3);
exampleQueue.addToQueue(4);

console.log(exampleQueue.peek()); //1

exampleQueue.dequeue();

console.log(exampleQueue.printQueue());
/*  |
 *  V
 *  
 *  2
 *  3
 *  4
 */