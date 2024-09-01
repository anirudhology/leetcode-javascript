const isMatch = (s, p) => {
    // Lengths of strings
    const m = s.length;
    const n = p.length;
    // Lookup table to store if s[0...i] is a pattern of p[0...j]
    const lookup = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));
    // Empty string matches with empty pattern
    lookup[0][0] = true;
    // For empty string and star patten
    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === '*') {
            lookup[0][j] = lookup[0][j - 2];
        }
    }
    // Populate the remaining table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If characters are same or pattern is period
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                lookup[i][j] = lookup[i - 1][j - 1];
            }
            // For star pattern
            else if (j > 1 && p[j - 1] === '*') {
                lookup[i][j] = lookup[i][j - 2];
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    lookup[i][j] = lookup[i][j] || lookup[i - 1][j];
                }
            }
        }
    }
    return lookup[m][n];
};

module.exports = isMatch;