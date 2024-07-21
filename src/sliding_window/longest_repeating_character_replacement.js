/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
    // Special case
    if (s === undefined || s.length === 0 || k < 0) {
        return 0;
    }
    // Left and right pointers for the sliding window
    let left = 0;
    let right = 0;
    // Array to store frequencies of all characters in the string
    const frequencies = new Array(26).fill(0);
    // Count of most popular character so far
    let maxCount = 0;
    // Longest length
    let longestLength = 0;
    // Process the string
    while (right < s.length) {
        // Find the frequency of current character
        const frequency = ++frequencies[s[right].charCodeAt(0) - 'A'.charCodeAt(0)];
        // Update maxCount, if required
        maxCount = Math.max(maxCount, frequency);
        // If there are more than k characters as most popular character,
        // we shift the window
        if (right - left + 1 - maxCount > k) {
            frequencies[s[left].charCodeAt(0) - 'A'.charCodeAt(0)]--;
            left++;
        }
        longestLength = Math.max(longestLength, right - left + 1);
        right++;
    }
    return longestLength;
};

module.exports = characterReplacement;