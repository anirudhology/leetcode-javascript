const countSubstrings = s => {
    // Special case
    if (s === null || s.length === 0) {
        return 0;
    }
    // Total number of palindromic substrings
    let count = 0;
    // Process the string by taking each index as the middle
    // and expand in both directions from it
    for (let i = 0; i < s.length; i++) {
        count += expandFromCenter(s, i, i); // Odd length
        count += expandFromCenter(s, i, i + 1) // Even length
    }
    return count;
};

const expandFromCenter = (s, left, right) => {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
        count++;
    }
    return count;
};

module.exports = countSubstrings;