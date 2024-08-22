/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (text1, text2) => {
    // Lengths of both the strings
    const m = text1.length;
    const n = text2.length;
    // Lookup table to store longest length until index i of text1
    // and index j of text2
    const lookup = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    // Populate the table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If both the characters are same, then we need to just
            // add 1 to the value at i - 1, j - 1
            if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
                lookup[i][j] = 1 + lookup[i - 1][j - 1];
            }
            // Else, we will take the maximum of previous row and previous
            // column value
            else {
                lookup[i][j] = Math.max(lookup[i - 1][j], lookup[i][j - 1]);
            }
        }
    }
    return lookup[m][n];
};

module.exports = longestCommonSubsequence;