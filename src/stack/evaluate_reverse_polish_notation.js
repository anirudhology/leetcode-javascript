/**
 * @param {string[]} tokens
 * @return {number}
 */
var evaluateReversePolishNotation = tokens => {
    // Stack to store operands
    const operands = [];
    // Two operators at a time
    let x = 0;
    let y = 0;
    // Process all tokens
    for (const token of tokens) {
        switch (token) {
            case "+":
                x = operands.pop();
                y = operands.pop();
                operands.push(x + y);
                break;
            case "-":
                x = operands.pop();
                y = operands.pop();
                operands.push(y - x);
                break;
            case "*":
                x = operands.pop();
                y = operands.pop();
                operands.push(x * y);
                break;
            case "/":
                x = operands.pop();
                y = operands.pop();
                operands.push(Math.trunc(y / x));
                break;
            default:
                operands.push(parseInt(token));
        }
    }
    return operands.pop();
};

module.exports = evaluateReversePolishNotation;