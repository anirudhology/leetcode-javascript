const dailyTemperatures = temperatures => {
    // Special case
    if (temperatures === undefined || temperatures.length === 0) {
        return temperatures;
    }
    // Length of the array
    const n = temperatures.length;
    // Answer array
    const answer = new Array(n).fill(0);
    // Stack to store the indices of elements
    const stack = new Array(n).fill(-1);
    // Top of the stack
    let top = -1;
    // Process the array from right to left
    for (let i = n - 1; i >= 0; i--) {
        // Since we are moving from right to left, the next
        // greater element will be at the top of the stack
        // and we can consider it
        while (top > -1 && temperatures[i] >= temperatures[stack[top]]) {
            top--;
        }
        // If the stack is not empty at this time, it means we have next greater
        // element represented by the top, and we can find the distance between
        // current index and top
        if (top > -1) {
            answer[i] = stack[top] - i;
        }
        // Insert current index
        top++;
        stack[top] = i;
    }
    return answer;
};

module.exports = dailyTemperatures;