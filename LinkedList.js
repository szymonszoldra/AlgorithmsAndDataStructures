/*
 *
 *  My implementation of custom Linked List using JS object
 *  
 */


class List {
  constructor(value) {
    this.head = this.createNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  //Create node to DRY
  createNode(value) {
    return {
      value: value,
      next: null
    }
  }

  //Add value at the end of the List
  add(value) {
    const node = this.createNode(value);

    if (!this.head.value) {
      this.head = node;
      this.tail = node;
      return this.head;
    }

    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  //Add value at the beginning of the List
  addAtTheBeginning(value) {
    const node = this.createNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  //Insert value into the custom index
  insertIntoIndex(index, value) {
    if (typeof index !== 'number') return false;

    if (index >= this.length) {
      this.add(value);
    } else if (index <= 0) {
      this.addAtTheBeginning(value);
    } else {
      const node = this.createNode(value);
      const currentNode = this.scrollTo(index);

      node.next = currentNode.next;
      currentNode.next = node;
      this.length++;
    }
  }

  //Remove item at the end
  remove() {
    let currentNode = this.head;

    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
  }

  //Remove item on the index 0
  removeAtTheBeginning() {
    const newHead = this.head.next;
    this.head = newHead;
    this.length--;
  }

  //Remove item on the custom index
  removeFromIndex(index) {
    if (typeof index !== 'number') return false;

    if (index >= this.length) {
      this.remove();
    } else if (index <= 0) {
      this.removeAtTheBeginning();
    } else {
      const currentNode = this.scrollTo(index);

      currentNode.next = currentNode.next.next;
      this.length--;
    }
  }

  //Get value of the item at the custom index
  get(index) {
    if (index >= this.length || index < 0) {
      console.error(`There is no index ${index}`);
      return false;
    }
    const currentNode = this.scrollTo(index + 1);
    return currentNode.value;
  }

  //Set value of the item at the custom index
  set(index, value) {
    if (index >= this.length || index < 0) {
      console.error(`There is no index ${index}`);
      return false;
    }
    const currentNode = this.scrollTo(index + 1);
    currentNode.value = value;
    return currentNode.value;
  }

  //Scroll to custom node, to DRY
  scrollTo(index) {
    let counter = 0;
    let currentNode = this.head;
    index = Math.floor(index);

    while (counter !== index - 1) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  //Return whole list
  showList() {
    return this;
  }

  //Get the length attribute of the List
  getLength() {
    return this.length;
  }

  //Print values as a string
  showListValues() {
    let currentNode = this.head;
    const values = [];


    if (this.length < 2) {
      return this.head.value;
    }

    do {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    } while (currentNode.next !== null)

    values.push(currentNode.value);
    return values.join(' -> ');
  }

  //Reverse the List
  reverseList() {

    let firstNode = this.head;
    let secondNode = this.head.next;

    while (secondNode) {
      const temporary = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = temporary;
    }

    this.head.next = null;
    this.head = firstNode;
  }

  //Clear whole List
  clear() {
    this.head = this.createNode(null);
    this.tail = this.head;
    this.length = 1;
  }
}


/*
 *
 *  Test
 *  
 */


//Initialization
const exampleList = new List(10);

exampleList.add(20);
exampleList.add(30);
exampleList.add(40);
exampleList.add(50);
exampleList.add(60);

// List is now 10->20->30->40->50->60

exampleList.addAtTheBeginning(0);
exampleList.insertIntoIndex(3, 99);
exampleList.removeFromIndex(2);

console.log(exampleList.showList()); //Print whole list as an object

console.log(exampleList.showListValues()); // 0 -> 10 -> 99 -> 30 -> 40 -> 50 -> 60
console.log(exampleList.get(2)); //99
console.log(exampleList.set(4, 88)) //88

console.log(exampleList.getLength()) // 7
console.log(exampleList.showListValues()); // 0 -> 10 -> 99 -> 30 -> 88 -> 50 -> 60

exampleList.reverseList();
console.log(exampleList.showListValues()); // 60 -> 50 -> 88 -> 30 -> 99 -> 10 -> 0

exampleList.clear();
console.log(exampleList.showList()); //Object with head and tail {value: null, next: null}, length 1
console.log(exampleList.showListValues()); // null