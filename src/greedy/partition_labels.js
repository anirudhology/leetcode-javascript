const partitionLabels = s => {
    // List to store the sizes of the partitions
    const sizes = [];
    // Special case
    if (!s) {
        return sizes;
    }
    // Array to store last positions of the character
    const lastPositions = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        lastPositions[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;
    }
    // Pointers for sliding window
    let left = 0;
    let right = 0;
    // Process the string
    for (let i = 0; i < s.length; i++) {
        right = Math.max(right, lastPositions[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]);
        if (right === i) {
            sizes.push(right - left + 1);
            left = i + 1;
        }
    }
    return sizes;
};

module.exports = partitionLabels;