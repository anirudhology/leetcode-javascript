const longestPalindrome = s => {
    // Special case
    if (s === null || s.length === 0) {
        return s
    }
    // Start and end pointers of longest palindromic substring
    let start = 0;
    let end = 0;
    // Process the string
    for (let i = 0; i < s.length; i++) {
        // Find longest palindromic string when expand from odd and
        // even indices respectively
        const oddLength = expandFromCenter(s, i, i);
        const evenLength = expandFromCenter(s, i, i + 1);
        // Max length of the two
        const maxLength = Math.max(oddLength, evenLength);
        if (maxLength > end - start) {
            start = i - Math.floor((maxLength - 1) / 2);
            end = i + Math.floor(maxLength / 2);
        }
    }
    return s.substring(start, end + 1);
};

const expandFromCenter = (s, left, right) => {
    if (left > right) {
        return 0;
    }
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
};

module.exports = longestPalindrome;