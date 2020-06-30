/*
 *
 *  My implementation of custom Array using JS object
 *  
 */

class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //Add value at the end of Array
  add(value) {
    this.data[this.length] = value;
    this.length++;
  }

  //Add value on custom index
  addOnIndex(index, value) {
    if (index < 0) {
      console.error(`Index must be greater than 0!`);
      return false;
    }

    index = Math.floor(index);

    if (this.length <= index) {
      this.add(value);
    } else {
      const temp = this.get(index);
      this.data[index] = value;

      for (let i = index + 1; i < this.length; i++) {
        this.data[i + 1] = this.data[i];
      }

      this.data[index + 1] = temp;
      this.length++;
    }
  }

  //Remove last value
  remove() {
    delete this.data[this.length - 1];
    this.length--;
  }

  //Remove value on custom index
  removeOnIndex(index) {
    if (index < 0) {
      console.error(`Index must be greater than 0!`);
      return false;
    }

    index = index = Math.floor(index);

    if (this.length < index) {
      this.remove();
    } else {
      for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }

      delete this.data[this.length - 1];
      this.length--;
    }
  }

  //Change value on custom index (if exists!)
  set(index, value) {
    if (index >= this.length || index < 0) {
      console.error(`There is nothing on index ${index}`);
      return false;
    }

    index = Math.floor(index);

    this.data[index] = value;
  }

  //Get value on index
  get(index) {
    if (index in this.data) {
      return this.data[index];
    } else {
      console.error(`There is nothing on index ${index}`);
      return false;
    }
  }

  //Get length of the Array
  getLength() {
    return this.length;
  }

  //Return whole Array
  printAll() {
    return this.data;
  }
}

//Inicialize
const myArr = new CustomArray();

myArr.add(5);
myArr.add(10);
myArr.add(15);
myArr.add(20);
//Array is now [5,10,15,20]

console.log(myArr.get(1)); //10
console.log(myArr.get(4)); //There is nothing on index 4 (returns false)

console.log("before", myArr.printAll()); // before: [5,10,15,20]
myArr.addOnIndex(2, 99);
console.log("after", myArr.printAll()); // after: [5,10,99,15,20]

myArr.remove();
console.log(myArr.printAll()); //[5,10,99,15]

myArr.removeOnIndex(0);
console.log(myArr.printAll()); //[10,99,15]

myArr.set(2, 10);
console.log(myArr.printAll()); //[10,99,10]

console.log(myArr.getLength()); //3