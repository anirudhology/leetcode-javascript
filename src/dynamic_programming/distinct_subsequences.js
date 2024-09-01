const numDistinct = (s, t) => {
    // Lengths of both strings
    const m = s.length;
    const n = t.length;
    // Lookup table to store the number of distinct subsequences
    const lookup = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    // If t is empty, it is a subsequence of every string but only once
    for (let i = 0; i <= m; i++) {
        lookup[i][0] = 1;
    }
    // If both s and t are empty
    lookup[0][0] = 1;
    // Populate the remaining table
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= m; i++) {
            lookup[i][j] = lookup[i - 1][j];
            // If both character are same
            if (s.charAt(i - 1) === t.charAt(j - 1)) {
                lookup[i][j] += lookup[i - 1][j - 1];
            }
        }
    }
    return lookup[m][n];
};

module.exports = numDistinct;