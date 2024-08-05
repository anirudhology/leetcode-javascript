const letterCombinations = digits => {
    // List to store all the combinations
    const combinations = [];
    // Special case
    if (digits === null || digits.length === 0) {
        return combinations;
    }
    // Map for all the digits
    const mappings = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ];
    // Perform backtracking
    backtrack(digits, 0, "", mappings, combinations);
    return combinations;
};

const backtrack = (digits, index, combination, mappings, combinations) => {
    // Base case
    if (index === digits.length) {
        combinations.push(combination);
        return;
    }
    // Get letters corresponding to the given index
    const letters = mappings[digits.charCodeAt(index) - '0'.charCodeAt(0)];
    for (let letter of letters) {
        backtrack(digits, index + 1, combination + letter, mappings, combinations);
    }
}

module.exports = letterCombinations;