const lastStoneWeight = stones => {
    // Special case
    if (stones === null || stones.length === 0) {
        return 0;
    }
    // Create max heap for storing stones by weights
    const maxHeap = [];
    // Add all stones to the heap
    for (let stone of stones) {
        maxHeap.push(-stone);
        maxHeap.sort((a, b) => b - a);
    }
    // Smash stones together
    while (maxHeap.length > 1) {
        const x = -maxHeap.pop();
        const y = -maxHeap.pop();
        maxHeap.push(y - x);
        maxHeap.sort((a, b) => b - a);
    }
    return -maxHeap.pop();
};

module.exports = lastStoneWeight;