const isInterleave = (s1, s2, s3) => {
    // Lengths of the strings
    const m = s1.length;
    const n = s2.length;
    // Special case
    if (m + n !== s3.length) {
        return false;
    }
    // Lookup table to see if s3[0...k] can be formed by
    // s1[0...i] and s2[0...j]
    const lookup = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));
    // For empty strings
    lookup[0][0] = true;
    // If s2 is empty
    for (let i = 1; i <= m; i++) {
        lookup[i][0] = lookup[i - 1][0] && s1[i - 1] === s3[i - 1];
    }
    // If s1 is empty
    for (let j = 1; j <= n; j++) {
        lookup[0][j] = lookup[0][j - 1] && s2[j - 1] === s3[j - 1];
    }
    // Populate the remaining table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            lookup[i][j] = (lookup[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || (lookup[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
        }
    }
    return lookup[m][n];
};

module.exports = isInterleave;