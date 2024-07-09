const topKFrequent = (nums, k) => {
    // Special case
    if (nums === undefined || nums.length == 0 || k < 0) {
        return [];
    }
    // Map to store the frequencies of the elements in the array
    const frequencies = new Map();
    for (const num of nums) {
        if (frequencies.has(num)) {
            frequencies.set(num, frequencies.get(num) + 1);
        } else {
            frequencies.set(num, 1);
        }
    }
    // List to store the buckets
    const buckets = new Array(nums.length + 1).fill(null).map(() => []);
    // Populate the buckets
    frequencies.forEach((value, key) => {
        buckets[value].push(key);
    });
    // Array to store the final output
    const result = new Array(k);
    for (let i = buckets.length - 1, j = 0; i >= 0, j < k; i--) {
        if (buckets[i].length > 0) {
            for (element of buckets[i]) {
                result[j] = element;
                j++;
            }
        }
    }
    return result;
};

module.exports = topKFrequent;