const generateParentheses = n => {
    // List to store the final combinations
    const combinations = [];
    // Special case
    if (n <= 0) {
        return combinations;
    }
    // Stack to store the combination
    const stack = [];
    generate(n, 0, 0, stack, combinations);
    return combinations;
};

const generate = (n, left, right, stack, combinations) => {
    // Base case
    if (left === right && left === n) {
        let combination = "";
        for (c of stack) {
            combination += c;
        }
        combinations.push(combination);
        return;
    }
    // Add left parentheses if possible
    if (left < n) {
        stack.push('(');
        generate(n, left + 1, right, stack, combinations);
        stack.pop()
    }
    if (right < left) {
        stack.push(')');
        generate(n, left, right + 1, stack, combinations);
        stack.pop()
    }
}

module.exports = generateParentheses;