/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindowSubstring = (s, t) => {
    // Array to store the frequencies of characters in string t
    const frequencies = new Array(128).fill(0);
    for (let c of t) {
        frequencies[c.charCodeAt(0)]++;
    }
    // Left and irhgt pointers
    let left = 0;
    let right = 0;
    // Length of s and t
    const n = s.length;
    let count = t.length;
    // Minimum length
    let minLength = Number.MAX_SAFE_INTEGER;
    // Start index
    let start = 0;
    // Process the string
    while (right < n) {
        // Check if the current character exists in the string t
        if (frequencies[s[right].charCodeAt(0)] > 0) {
            count--;
        }
        frequencies[s[right].charCodeAt(0)]--;
        // Expand the window
        right++;
        // If we have found all the characters in t
        while (count == 0) {
            if (right - left < minLength) {
                minLength = right - left;
                start = left;
            }
            // Try to shrink the window
            if (frequencies[s[left].charCodeAt(0)] == 0) {
                count++;
            }
            frequencies[s[left].charCodeAt(0)]++;
            left++;
        }
    }
    return minLength == Number.MAX_SAFE_INTEGER ? "" : s.substring(start, start + minLength);
};

module.exports = minWindowSubstring;