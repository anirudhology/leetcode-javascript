const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const minInterval = (intervals, queries) => {
    // Total number of queries
    const n = queries.length;
    // Create a new array to include both query and its index
    const queryIndex = [];
    for (let i = 0; i < n; i++) {
        queryIndex.push([queries[i], i]);
    }
    // Sort the array by their query values
    queryIndex.sort((a, b) => a[0] - b[0]);
    // Sort the intervals by their left values
    intervals.sort((a, b) => a[0] - b[0]);
    // Min heap to store pairs of size of interval and its right index
    const minHeap = new MinPriorityQueue();
    // Index to keep track of intervals
    let j = 0;
    // Array to store final result
    const result = new Array(n);
    // Process all queries
    for (let i = 0; i < n; i++) {
        const query = queryIndex[i][0];
        const index = queryIndex[i][1];
        // Add all pairs to heap for which start value is smaller than
        // the value of the query
        while (j < intervals.length && intervals[j][0] <= query) {
            const size = intervals[j][1] - intervals[j][0] + 1;
            minHeap.enqueue([size, intervals[j][1]], size);
            j++;
        }
        // Remove all pairs from minHeap for which right value is smaller
        // than the value of query
        while (minHeap.size() && minHeap.front()[1] < query) {
            minHeap.dequeue();
        }
        result[index] = minHeap.size() > 0 ? minHeap.front()[0] : -1;
    }
    return result;
};

module.exports = minInterval;