const subsetsWithDup = nums => {
    // List to store final output
    const powerSet = [];
    // Special case
    if (nums === null || nums.length === 0) {
        return powerSet;
    }
    // Sort the array
    nums.sort((a, b) => a - b);
    // Perform backtracking
    backtrack(nums, 0, [], powerSet);
    return powerSet;
};

const backtrack = (nums, index, subset, powerSet) => {
    powerSet.push([...subset]);
    for (let i = index; i < nums.length; i++) {
        if (i > index && nums[i] === nums[i - 1]) {
            continue;
        }
        subset.push(nums[i]);
        backtrack(nums, i + 1, subset, powerSet);
        subset.pop();
    }
};

module.exports = subsetsWithDup;