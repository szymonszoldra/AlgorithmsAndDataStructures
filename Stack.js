/*
 *
 *  My implementation of Stack using JS array
 *  
 */


class Stack {
  constructor() {
    this.data = [];
  }

  //Add value at the top of the Stack
  push(value) {
    this.data[this.data.length] = value;
  }

  //Remove value from the top of the Stack
  pop() {
    this.data.pop();
  }

  //Get value of the last item added to Stack
  peek() {
    return this.data[this.data.length - 1];
  }

  //Print whole Stack
  printStack() {
    let string = '';
    for (let i = this.data.length - 1; i >= 0; i--) {
      string += `${this.data[i]}\n`;
    }
    if (!string) {
      return 'Stack is Empty!'
    }

    return string;
  }
}

/*
 *
 *  Test
 *  
 */

//Initialization
const exampleStack = new Stack;

exampleStack.push(1);
exampleStack.push(2);
exampleStack.push(3);
exampleStack.push(4);

exampleStack.pop();
console.log(exampleStack.peek()); //3

console.log(exampleStack.printStack());
/*  |
 *  V
 *  
 *  3
 *  2
 *  1
 */