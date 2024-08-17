const leastInterval = (tasks, n) => {
    // Special case
    if (!tasks || tasks.length === 0) {
        return 0;
    }
    // Array to store the frequency of every task
    const frequencies = new Array(26).fill(0);
    for (let task of tasks) {
        frequencies[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    // Max heap to store task frequencies
    const maxHeap = [];
    for (let frequency of frequencies) {
        if (frequency > 0) {
            maxHeap.push(frequency);
        }
    }
    // Sort the heap initially
    maxHeap.sort((a, b) => b - a);
    // Queue to store the pair of task remaining and the time at which it can be executed
    const pairs = [];
    let time = 0;
    // Process the tasks
    while (maxHeap.length > 0 || pairs.length > 0) {
        time++;
        // If the cooldown period for a task is over, push it back into the maxHeap
        if (pairs.length > 0 && time >= pairs[0][1]) {
            maxHeap.push(pairs.shift()[0]);
            maxHeap.sort((a, b) => b - a); // Sort the heap again
        }
        // Process the task
        if (maxHeap.length > 0) {
            let remainingCount = maxHeap.shift() - 1;
            if (remainingCount > 0) {
                pairs.push([remainingCount, time + n + 1]);
            }
        }
    }
    return time;
};

module.exports = leastInterval;