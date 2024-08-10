const wordBreak = (s, wordDict) => {
    // Special case
    if (s === null || s.length === 0 || wordDict === null || wordDict.length === 0) {
        return false
    }
    const n = s.length;
    // Convert list to set for O(1) search
    const words = new Set(wordDict);
    // Lookup table to store if the substring until current index
    // lies in the dictionary or not
    const lookup = new Array(n + 1).fill(false);
    // Empty string is always present
    lookup[0] = true;
    // Process the string
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (lookup[j] && words.has(s.substring(j, i))) {
                lookup[i] = true;
                break;
            }
        }
    }
    return lookup[n];
};

module.exports = wordBreak;