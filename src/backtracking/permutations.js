const permute = function (nums) {
    // List to store final output
    const permutations = [];
    // Special case
    if (nums === null || nums.length === 0) {
        return permutations;
    }
    // Perform backtracking
    backtrack(nums, [], permutations);
    return permutations;
};

const backtrack = (nums, permutation, permutations) => {
    if (permutation.length === nums.length) {
        permutations.push([...permutation]);
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (permutation.includes(nums[i])) {
                continue;
            }
            permutation.push(nums[i]);
            backtrack(nums, permutation, permutations);
            permutation.pop();
        }
    }
};

module.exports = permute;