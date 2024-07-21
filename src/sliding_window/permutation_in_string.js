/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    // Special case
    if (s1.length > s2.length) {
        return false;
    }
    // Array to store the frequencies of characters in s1
    const frequencies = new Array(26).fill(0);
    for (let c of s1) {
        frequencies[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    // Left and right pointers for the sliding window
    let left = 0;
    let right = 0;
    // Process the s2 string
    while (right < s2.length) {
        frequencies[s2[right].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        while (left < s2.length && frequencies[s2[right].charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
            frequencies[s2[left].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            left++;
        }
        if (right - left + 1 === s1.length) {
            return true;
        }
        right++;
    }
    return false;
};

module.exports = checkInclusion;