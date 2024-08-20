const countComponents = (n, edges) => {
    // Array to store the parents of each node
    const parents = [];
    for (let i = 0; i < n; i++) {
        parents[i] = i;
    }
    // Union all edges
    for (const edge of edges) {
        union(edge[0], edge[1], parents);
    }
    // Count number of connected components by counting nodes that
    // are their own parents
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (i === find(parents[i], parents)) {
            count++;
        }
    }
    return count;
}

const union = (a, b, parents) => {
    const rootA = find(a, parents);
    const rootB = find(b, parents);
    parents[rootA] = rootB;
};

const find = (node, parents) => {
    if (node !== parents[node]) {
        // Path compression
        parents[node] = parents[parents[node]];
    }
    return parents[node];
}

module.exports = countComponents;