const productExceptSelf = nums => {
    // Special case
    if (nums === undefined || nums.length < 2) {
        return nums;
    }
    // Length of the array
    const n = nums.length;
    // Array to store the final output
    const product = new Array(n).fill(0);
    // Cumulative product of the array elements
    let cumulativeProduct = 1;
    // Process the array from left to right
    for (let i = 0; i < n; i++) {
        product[i] = cumulativeProduct;
        cumulativeProduct *= nums[i];
    }
    // Reset the cumulativeProduct
    cumulativeProduct = 1;
    // Process the array from right to left
    for (let i = n - 1; i >= 0; i--) {
        product[i] *= cumulativeProduct;
        cumulativeProduct *= nums[i];
    }
    return product;
};

module.exports = productExceptSelf;