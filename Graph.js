/*
 *
 *  My implementation of Graph using JS object
 *  
 */


class Graph {
  constructor() {
    this.data = {};
    this.vertexNumber = 0;
    this.edgesNumber = 0;
  }

  //Add vertex to the Graph
  addVertex(vertex) {
    if (vertex in this.data) {
      console.log('Vertex already exists');
      return false;
    }
    this.data[vertex] = [];
    this.vertexNumber++;
  }

  //Add edge between two edges (if they both exist)
  addEdgeBetween(vertex1, vertex2) {
    if (vertex1 in this.data && vertex2 in this.data) {
      this.data[vertex1].push(vertex2);
      this.data[vertex2].push(vertex1);
      this.edgesNumber++;
    } else {
      console.log('Could not find that pair of vertex in Graph!');
      return false;
    }
  }

  //Delete vertex and all edges connected to it
  deleteVertex(vertex) {
    if (vertex in this.data) {
      delete this.data[vertex];

      for (const property in this.data) {
        const arr = this.data[property].filter(item => item !== vertex);
        this.data[property] = arr;
      }
    }
  }

  //Print whole Graph
  printGraph() {
    let printedGraph = [];
    for (const vertex in this.data) {
      let string = `Vertex: ${vertex}, eges with: `
      string += this.data[vertex].join(' ');
      printedGraph.push(string);
    }
    return printedGraph.join('\n');
  }
}

/*
 *
 *  Test
 *  
 */

//Initialization
const exampleGraph = new Graph();

exampleGraph.addVertex('A');
exampleGraph.addVertex('B');
exampleGraph.addVertex('C');
exampleGraph.addVertex('D');

exampleGraph.addEdgeBetween('A', 'B');
exampleGraph.addEdgeBetween('A', 'C');
exampleGraph.addEdgeBetween('C', 'D');
exampleGraph.addEdgeBetween('D', 'B');

console.log(exampleGraph.printGraph());

/*
 *  Vertex: A, eges with: B C
 *  Vertex: B, eges with: A D
 *  Vertex: C, eges with: A D
 *  Vertex: D, eges with: C B  
 */

exampleGraph.deleteVertex('C');
console.log(exampleGraph.printGraph());

/*
 *  Vertex: A, eges with: B 
 *  Vertex: B, eges with: A D
 *  Vertex: D, eges with: B  
 */