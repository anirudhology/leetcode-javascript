const combinationSum2 = (candidates, target) => {
    // List to store final output
    const combinations = [];
    // Special case
    if (candidates === null || candidates.length === 0) {
        return combinations;
    }
    // Sort the array
    candidates.sort((a, b) => a - b);
    // Perform backtracking
    backtrack(candidates, 0, [], combinations, target);
    return combinations;
};

const backtrack = (candidates, index, combination, combinations, target) => {
    if (target === 0) {
        combinations.push([...combination]);
        return;
    }
    if (target < 0) {
        return;
    }
    for (let i = index; i < candidates.length; i++) {
        if (i > index && candidates[i] === candidates[i - 1]) {
            continue;
        }
        combination.push(candidates[i]);
        backtrack(candidates, i + 1, combination, combinations, target - candidates[i]);
        combination.pop();
    }
};

module.exports = combinationSum2;