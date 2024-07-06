const containsDuplicate = nums => {
    // Special case
    if (nums === undefined || nums.length === 0) {
        return false;
    }
    // Hash set to store elements
    const elements = new Set();
    // Process each element in the array one by one
    for (const num of nums) {
        if (elements.has(num)) {
            return true;
        }
        elements.add(num);
    }
    return false;
};

module.exports = containsDuplicate;