const threeSum = nums => {
    // List to store the triplets
    const triplets = [];
    // Special case
    if (nums === undefined || nums.length < 3) {
        return triplets;
    }
    // Length of the array
    const n = nums.length;
    // Sort the array
    nums.sort((a, b) => a - b);
    // Process the array
    for (let i = 0; i < n - 2; i++) {
        // Skip the duplicates, if any
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // Left and right pointers for the remaining array
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            // Sum is zero
            if (sum === 0) {
                triplets.push([nums[i], nums[j], nums[k]]);
                // Skip the duplicates, if any
                while (j < k && nums[j] === nums[j + 1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k - 1]) {
                    k--;
                }
                j++;
                k--;
            }
            // If the sum is negative, it means we are too left,
            // and we need to move towards right
            else if (sum < 0) {
                j++;
            }
            // If the sum is positive, it means we are too right,
            // and we need to move towards left
            else {
                k--;
            }
        }
    }
    return triplets;
};

module.exports = threeSum;