const isAnagram = (s, t) => {
    // Special case
    if (s.length !== t.length) {
        return false;
    }
    // Array to store the frequencies of characters
    const frequencies = Array.from({ length: 26 }, () => 0);
    // Traverse through both strings
    for (let i = 0; i < s.length; i++) {
        let sIndex = s.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);
        let tIndex = t.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);
        frequencies[sIndex]++;
        frequencies[tIndex]--;
    }
    // Check if there is any non-zero frequency
    for (const frequency of frequencies) {
        if (frequency !== 0) {
            return false;
        }
    }
    return true;
};

module.exports = isAnagram;