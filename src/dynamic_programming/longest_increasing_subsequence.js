const lengthOfLIS = nums => {
    // Special case
    if (nums === null || nums.length === 0) {
        return 0;
    }
    // Lookup table to store length of LIS until current index
    const lookup = new Array(nums.length).fill(1);
    // Process the array
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                lookup[i] = Math.max(lookup[i], 1 + lookup[j]);
            }
        }
    }
    return Math.max.apply(0, lookup);
};

module.exports = lengthOfLIS;