const findTargetSumWays = (nums, target) => {
    // Special case
    if (!nums) {
        return 0;
    }
    // Map to store results of overlapping subproblems
    const lookup = new Map();
    return evaluate(nums, target, 0, lookup);
};

const evaluate = (nums, target, index, lookup) => {
    // Base case
    if (index >= nums.length) {
        return target === 0 ? 1 : 0;
    }
    // Already calculated result to this problem
    const key = index + "-" + target;
    if (lookup.has(key)) {
        return lookup.get(key)
    }
    // Evaluate results for both positive and negative signs
    const ways = evaluate(nums, target - nums[index], index + 1, lookup) + evaluate(nums, target + nums[index], index + 1, lookup);
    lookup.set(key, ways);
    return ways;
}

module.exports = findTargetSumWays;