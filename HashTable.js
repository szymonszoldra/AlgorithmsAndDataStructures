/*
 *
 *  My implementation of HashTable using JS object
 *  
 */

class HashTable {
  constructor() {
    this.data = {};
  }

  //Static Hash method
  static hash(key) {
    let string = '';

    for (let i = 0; i < key.length; i++) {
      const partial = (key.charCodeAt(i) - key.length * i).toString(16);
      string += partial;
    }
    return string;
  }

  //Set value of the element with custom key
  set(key, value) {
    const hashCode = HashTable.hash(key);
    this.data[hashCode] = {
      key,
      value
    }
  }

  //Get value of the element of custom key
  get(key) {
    const hashCode = HashTable.hash(key);
    if (!this.data[hashCode]) {
      return undefined
    }
    return this.data[hashCode].value;
  }

  //Removes the element of custom key
  remove(key) {
    const hashCode = HashTable.hash(key);
    if (!this.data[hashCode]) {
      console.error(`Nothing assigned to key ${key}!`)
      return null;
    }
    delete this.data[hashCode];
  }

  //Print keys from HashTable
  getAllKeys() {
    const arr = [];
    for (const property in this.data) {
      arr.push(this.data[property].key);
    }
    return arr.join(', ')
  }

  //Print values from HashTable
  getAllValues() {
    const arr = [];
    for (const property in this.data) {
      arr.push(this.data[property].value);
    }
    return arr.join(', ')
  }

  //Print paris of key and value
  getAllPairs() {
    const arr = [];
    for (const property in this.data) {
      arr.push(`{key: ${this.data[property].key}, value: ${this.data[property].value}}`);
    }
    return arr.join(', ')
  }


  //ONLY FOR DEVELOPING
  printWithHashes() {
    return this.data;
  }
}

/*
 *
 *  Test
 *  
 */

//Initialization
const exampleHashTable = new HashTable();

exampleHashTable.set('pineapple', 5);
exampleHashTable.set('watermelon', 99);

console.log(exampleHashTable.get('pineapple')); //5
console.log(exampleHashTable.get('watermelon')); //99
console.log(exampleHashTable.get('raspberry')); //undefined

console.log(exampleHashTable.getAllKeys()); // 'pineapple', 'watermelon'
console.log(exampleHashTable.getAllValues());
5, 99
console.log(exampleHashTable.getAllPairs()); // {key: pineapple, value: 5}, {key: watermelon, value: 99}


//ONLY FOR DEVELOPING! it shows how my hash function works
console.log(exampleHashTable.printWithHashes());

/*
 *
 * {
 *  '70605c4a3d433a2d1d': { key: 'pineapple', value: 5 },
 *  '775760474a3b29261f14': { key: 'watermelon', value: 99 }
 * }  
 *
 */