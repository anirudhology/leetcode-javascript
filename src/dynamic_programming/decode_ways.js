const numDecodings = s => {
    // Special case
    if (s === null || s.length === 0) {
        return 0;
    }
    // Length of the string
    const n = s.length;
    let previous = 1;
    let current = 0;
    // Process the string from right to left
    for (let i = n - 1; i >= 0; i--) {
        let temp = s[i] === '0' ? 0 : previous;
        if (i < n - 1 && (s[i] === '1' || s[i] === '2' && s[i + 1] < '7')) {
            temp += current;
        }
        current = previous;
        previous = temp;
    }
    return previous;
};

module.exports = numDecodings;