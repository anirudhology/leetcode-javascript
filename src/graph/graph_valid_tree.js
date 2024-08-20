const validTree = (n, edges) => {
    if (edges === null || edges.length === 0) {
        return n === 1
    }
    // Adjacency list
    const adjacencyList = [];
    for (let i = 0; i < n; i++) {
        adjacencyList.push([]);
    }
    for (const edge of edges) {
        adjacencyList[edge[0]].push(edge[1]);
        adjacencyList[edge[1]].push(edge[0]);
    }
    // Set to store visited nodes
    const visited = new Set();
    // Queue for BFS
    const nodes = [];
    nodes.push(edges[0][0]);
    while (nodes.length > 0) {
        const node = nodes.shift();
        // Found loop
        if (visited.has(node)) {
            return false;
        }
        visited.add(node);
        for (const neighbor of adjacencyList[node]) {
            nodes.push(neighbor);
            adjacencyList[neighbor].shift(node);
        }
    }
    return visited.size === n;
};

module.exports = validTree;

