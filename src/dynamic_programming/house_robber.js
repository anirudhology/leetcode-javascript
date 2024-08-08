const rob = nums => {
    // Total number of houses
    const n = nums.length;
    // Special cases
    if (n === 1) {
        return nums[0];
    }
    if (nums === 2) {
        return Math.max(nums[0], nums[1]);
    }
    // Lookup table for remaining houses
    const lookup = new Array(n).fill(0);
    lookup[0] = nums[0];
    lookup[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        lookup[i] = Math.max(lookup[i - 2] + nums[i], lookup[i - 1]);
    }
    return lookup[n - 1];
};

module.exports = rob;