/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = s => {
    // Minimum and maximum count of open left parentheses
    let min = 0;
    let max = 0;
    // Traverse the string
    for (let c of s) {
        // If it is a left parenthesis, it means you have one
        // more open parenthesis to worry about
        if (c === '(') {
            min++;
            max++;
        }
        // If it is right parenthesis, it means you have one
        // less open parenthesis to worry about
        else if (c === ')') {
            min--;
            max--;
        }
        // If it is *, it means there are three cases
        // 1. If we make it as ), then we have one less open parenthesis to worry about
        // 2. If we make it as (, then we have one more open parentheses
        // to worry about
        // 3. No impact at all
        else if (c === '*') {
            min--;
            max++;
        }
        // There are more closing parentheses then opening ones
        if (max < 0) {
            return false;
        }
        // We can't have negative open parenthesis count
        min = Math.max(min, 0);
    }
    return min === 0;
};

module.exports = checkValidString;