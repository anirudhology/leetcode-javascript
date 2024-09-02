const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const networkDelayTime = (times, n, k) => {
    // Map to represent graph
    const graph = new Map();
    for (const time of times) {
        if (!graph.has(time[0])) {
            graph.set(time[0], new Map());
        }
        graph.get(time[0]).set(time[1], time[2]);
    }
    // Min heap to store pair of distance and node
    const minHeap = new MinPriorityQueue();
    minHeap.enqueue([0, k]);
    // Set to store visited nodes
    const visited = new Set();
    // Process until we have nodes in min heap
    while (minHeap.size() > 0) {
        const node = minHeap.dequeue();
        const travelTime = node[0];
        const currentNode = node[1];
        visited.add(currentNode);
        if (visited.size === n) {
            return travelTime;
        }
        // Add all unvisited neighbors to the heap
        if (graph.has(currentNode)) {
            for (const [neighbor, time] of graph.get(currentNode)) {
                if (!visited.has(neighbor)) {
                    minHeap.enqueue([travelTime + time, neighbor]);
                }
            }
        }
    }
    return -1;
};

module.exports = networkDelayTime;