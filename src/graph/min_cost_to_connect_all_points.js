const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

const minCostConnectPoints = points => {
    // Special case
    if (points === undefined || points.length === 0) {
        return 0;
    }
    // Total number of points
    const n = points.length;
    // Array to store visited vertices
    const visited = new Array(n).fill(false);
    // We need to visit only n - 1 vertices as we don't want
    // cycle in the graph
    let edgesLeftToVisit = n - 1;
    // Total cost of connecting points
    let cost = 0;
    // Since we always want nearest edge to be chosen first,
    // we will use minHeap to store edges by distances
    const edges = new MinPriorityQueue();
    // We will choose first vertex 0 to find cost to reach all
    // points from here
    for (let i = 1; i < n; i++) {
        let currentCost = Math.abs(points[i][0] - points[0][0]) + Math.abs(points[i][1] - points[0][1]);
        edges.enqueue(new Edge(0, i, currentCost));
    }
    // Mark 0 node as visited
    visited[0] = true;
    // Process edges until edgesLeftToVisit becomes 0
    while (edges.size() > 0 && edgesLeftToVisit > 0) {
        // Get the current edge
        const edge = edges.dequeue();
        const v = edge.v;
        const weight = edge.weight;
        if (!visited[v]) {
            // Add the cost and mark as visited
            cost += weight;
            visited[v] = true;
            // Now traverse all possible points from v
            for (let i = 0; i < n; i++) {
                if (!visited[i]) {
                    const distance = Math.abs(points[v][0] - points[i][0]) + Math.abs(points[v][1] - points[i][1]);
                    edges.enqueue(new Edge(v, i, distance));
                }
            }
            edgesLeftToVisit--;
        }
    }
    return cost;
};

class Edge {
    constructor(u, v, weight) {
        this.u = u;
        this.v = v;
        this.weight = weight;
    }
}

module.exports = minCostConnectPoints;