/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleInHistogram = heights => {
    // Special case
    if (heights === undefined || heights.length === 0) {
        return 0;
    }
    // Length of the array
    const n = heights.length;
    // Monotonic stack to store the indices
    const stack = [];
    // Maximum area
    let maxArea = 0;
    // Process the heights
    for (let i = 0; i <= n; i++) {
        const height = i === n ? 0 : heights[i];
        while (stack.length > 0 && height < heights[stack[stack.length - 1]]) {
            const currentHeight = heights[stack.pop()];
            const currentWidth = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, currentWidth * currentHeight);
        }
        stack.push(i);
    }
    return maxArea;
};

module.exports = largestRectangleInHistogram;