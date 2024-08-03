const combinationSum = (candidates, target) => {
    // List to store final output
    const result = [];
    // Special case
    if (candidates === null || candidates.length === 0) {
        return result;
    }
    // Sort the array
    candidates.sort((a, b) => a - b);
    // Perform backtracking
    backtrack(candidates, 0, [], target, result);
    return result;
};

const backtrack = (candidates, index, combination, target, result) => {
    // Base cases
    if (target === 0) {
        result.push([...combination]);
        return;
    }
    if (target < 0) {
        return;
    }
    for (let i = index; i < candidates.length; i++) {
        combination.push(candidates[i]);
        backtrack(candidates, i, combination, target - candidates[i], result);
        combination.pop();
    }
};

module.exports = combinationSum;