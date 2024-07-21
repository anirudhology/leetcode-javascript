/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    // Special case
    if (s === undefined || s.length === 0) {
        return 0;
    }
    // Length of the string 
    const n = s.length;
    // Slow and fast pointers for the sliding window
    let slow = 0;
    let fast = 0;
    // Set to store unique characters
    const uniques = new Set();
    // Longest substring length
    let longestLength = 0;
    // Process the string
    while (fast < n) {
        while (fast < n && !uniques.has(s.charAt(fast))) {
            uniques.add(s.charAt(fast));
            fast++;
        }
        longestLength = Math.max(longestLength, uniques.size);
        // Remove left most character from the window
        uniques.delete(s.charAt(slow));
        slow++;
    }
    return longestLength;
};

module.exports = lengthOfLongestSubstring;