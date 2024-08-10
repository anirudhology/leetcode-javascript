const maxProduct = nums => {
    // Special case
    if (nums === null || nums.length === 0) {
        return 0;
    }
    // Both positive and negative numbers can contribute to the
    // maximum product subarray, hence we will maintain max and
    // min products calculated so far
    let currentMax = 1;
    let currentMin = 1;
    // Final maximum product
    let maxProduct = nums[0];
    // Process the array
    for (let num of nums) {
        // Handle zero
        // Keep track of current max
        const temp = currentMax;
        // Update current max and min values by considering the
        // current element
        currentMax = Math.max(num, Math.max(num * currentMax, num * currentMin));
        currentMin = Math.min(num, Math.min(num * temp, num * currentMin));
        // Update maxProduct until current index
        maxProduct = Math.max(currentMax, maxProduct);
    }
    return maxProduct;
};

module.exports = maxProduct;