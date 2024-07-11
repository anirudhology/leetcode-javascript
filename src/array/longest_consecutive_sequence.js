const longestConsecutiveSequence = nums => {
    // Special case
    if (nums === undefined || nums.length === 0) {
        return 0;
    }
    // Set to store all the elements of array for O(1) retrieval
    const elements = new Set();
    for (num of nums) {
        elements.add(num);
    }
    // Longest consecutive sequence length
    let lcsLength = 0;
    // Process each element in the array
    for (num of nums) {
        let currentElement = num;
        // If previous number to the current element is not present in
        // the elements set then this element must be the first element
        // in an LCS
        if (!elements.has(currentElement - 1)) {
            let currentLength = 1;
            while (elements.has(currentElement + 1)) {
                currentElement++;
                currentLength++;
            }
            lcsLength = Math.max(currentLength, lcsLength);
        }
    }
    return lcsLength;
};

module.exports = longestConsecutiveSequence;