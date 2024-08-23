const findRedundantConnection = edges => {
    // Total number of edges
    const n = edges.length;
    // Arrays to store parents and ranks
    const parents = new Array(n + 1);
    const ranks = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        parents[i] = i;
        ranks[i] = 1;
    }
    // Process every edge
    for (const edge of edges) {
        if (!union(edge, parents, ranks)) {
            return edge;
        }
    }
    return [];
};

const union = (edge, parents, ranks) => {
    // Find parents of both nodes
    const p1 = find(edge[0], parents);
    const p2 = find(edge[1], parents);
    // If both parents are same, it means there is cycle
    if (p1 === p2) {
        return false;
    }
    if (ranks[p1] > ranks[p2]) {
        parents[p2] = p1;
        ranks[p1] += ranks[p2];
    } else {
        parents[p1] = p2;
        ranks[p2] += ranks[p1];
    }
    return true;
};

const find = (node, parents) => {
    const p = parents[node];
    while (parents[p] !== p) {
        // Path compression
        parents[p] = parents[parents[p]];
        p = parents[p];
    }
    return p;
};

module.exports = findRedundantConnection;