const twoSum = (nums, target) => {
    // Special case
    if (nums === undefined || nums.length < 2) {
        throw new Error("Invalid inputs!");
    }
    // Map to store complements of a number w.r.t target and its index
    const mappings = new Map();
    // Process each element of the array one by one
    for (let i = 0; i < nums.length; i++) {
        // Check if map already has the current element
        if (mappings.has(nums[i])) {
            return [mappings.get(nums[i]), i];
        }
        // Add complement of the current element to the mappings
        mappings.set(target - nums[i], i);
    }
    throw new Error("Invalid inputs!");
};

module.exports = twoSum;