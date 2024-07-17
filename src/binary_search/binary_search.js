/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = (nums, target) => {
    // Special case
    if (nums === undefined || nums.length === 0) {
        return -1;
    }
    // Left and right pointers
    let left = 0;
    let right = nums.length - 1;
    // Process the array from both ends
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
};

module.exports = binarySearch