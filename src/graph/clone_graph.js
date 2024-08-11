const GraphNode = require('../../src/util/graph_node');

const cloneGraph = node => {
    // Special case
    if (node === null) {
        return null;
    }
    // Map to store mappings of original and clone nodes
    const mappings = new Map();
    // Perform DFS starting from the current node
    return dfs(node, mappings);
};

const dfs = (node, mappings) => {
    // Create clone node corresponding to the current node
    const cloneNode = new GraphNode(node.val);
    // List to store neighbors of cloned node
    const clonedNeighbors = [];
    mappings.set(node, cloneNode);
    // Traverse neighbors
    for (let neighbor of node.neighbors) {
        if (mappings.has(neighbor)) {
            clonedNeighbors.push(mappings.get(neighbor))
        } else {
            clonedNeighbors.push(dfs(neighbor, mappings));
        }
    }
    cloneNode.neighbors = clonedNeighbors;
    return cloneNode;
};

module.exports = cloneGraph;