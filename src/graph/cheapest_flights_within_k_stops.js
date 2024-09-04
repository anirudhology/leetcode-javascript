const findCheapestPrice = (n, flights, src, dst, k) => {
    // Adjacency list
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v, w] of flights) {
        graph[u].push([v, w]);
    }
    // Queue to store the neares distance from current node
    const nodes = [[src, 0]];
    // Array to store minimum cost for each destination
    const minCost = new Array(n).fill(0x7ffffffff);
    // Stops taken
    let stops = 0;
    // Process elements in the queue until it is empty
    // and less than or equal to k stops have taken
    while (nodes.length > 0 && stops <= k) {
        const size = nodes.length;
        for (let i = 0; i < size; i++) {
            const [node, cost] = nodes.shift();
            // Check for all neighbors
            for (const [neighbor, price] of graph[node]) {
                if (price + cost >= minCost[neighbor]) {
                    continue;
                }
                minCost[neighbor] = price + cost;
                nodes.push([neighbor, minCost[neighbor]]);
            }
        }
        stops++;
    }
    return minCost[dst] === 0x7ffffffff ? -1 : minCost[dst];
};

module.exports = findCheapestPrice;