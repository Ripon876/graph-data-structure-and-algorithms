
class Graph {
	constructor(graph,type){
         this.graph = graph;  
         this.type = type;  
	}

// Depth first traversal //
	dfp(node){
		if(!node){
			console.log( 'requires a start node');
			return;
		} 
	 const stack = [node];
	 while(stack.length > 0){
	 	const currenNode = stack.pop();
	 	console.log(currenNode);
	 	for(let neighbor of this.graph[currenNode]){
	 		stack.push(neighbor);
	 	}
	 }

	}

// Breadth first traversal //
	bfp(node){
		const queue = [node];
		while(queue.length > 0) {
			const currentNode = queue.shift();
			console.log(currentNode);
			for(let neighbor of this.graph[currentNode]){
				queue.push(neighbor);
			}
		}
	}


// Depth first search //
	dfs(node,src){

		 const stack = [src || Object.keys(this.graph)[0]];
		 while(stack.length > 0){

		 	const currentNode = stack.pop();
		 	if(currentNode == node) return true;
		 	for(let neighbor of this.graph[currentNode]){
		 		stack.push(neighbor);
		 	}
		 }
		
		return false;
    }


// Breadth first search //
	bfs(node,src){

		const queue = [src || Object.keys(this.graph)[0]];

		while(queue.length > 0) {

			const currentNode = queue.shift();
			if(currentNode === node) return true;
			for(let neighbor of this.graph[currentNode]){
				queue.push(neighbor);
			}
		}
        
		return false;
	}


	hasPath(algo,src,dst){
		if(algo === 'dfs') return	this.dfs(dst,src);
		if(algo === 'bfs') return	this.bfs(dst,src);  
	}


}




 let rawGraph = {     
	a: ['c','b'], //
	b: ['d'],    //
	c: ['e'],   //  directed graph
	d: ['f'],  //
	e: [],    //
	f: []    //
}


const graph = new Graph(rawGraph);

let s = performance.now();
console.log(graph.bfs('k'))
console.log(s - performance.now())





