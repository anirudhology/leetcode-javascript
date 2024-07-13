const validParentheses = s => {
    // Special case
    if (s === undefined || s.length === 0) {
        return true;
    }
    // Stack to store the left parentheses
    const stack = [];
    // Process the string
    for (const c of s) {
        // Add left parentheses to stack
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        }
        // Match the right parentheses
        else if (c === ')' && stack && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (c === '}' && stack && stack[stack.length - 1] === '{') {
            stack.pop();
        } else if (c === ']' && stack && stack[stack.length - 1] === '[') {
            stack.pop();
        }
        // For any other invalid characters
        else {
            return false;
        }
    }
    return stack.length === 0;
};

module.exports = validParentheses;