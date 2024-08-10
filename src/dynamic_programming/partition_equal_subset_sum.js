const canPartition = nums => {
    // Special case
    if (nums === null || nums.length === 0) {
        return false;
    }
    // Sum of all the elements in array
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    // Check if partition is possible
    if (sum % 2 !== 0) {
        return false;
    }
    // Target to reach
    const target = Math.floor(sum / 2);
    // Lookup table to find if partition is possible
    const lookup = new Array(target + 1).fill(false);
    // Zero is always possible
    lookup[0] = true;
    // Populate the table
    for (let num of nums) {
        for (let j = target; j >= num; j--) {
            lookup[j] = lookup[j] || lookup[j - num];
        }
    }
    return lookup[target];
};

module.exports = canPartition;