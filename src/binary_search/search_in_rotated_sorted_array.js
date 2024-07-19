/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInRotatedSortedArray = (nums, target) => {
    // Special case
    if (nums === undefined || nums.length === 0) {
        return -1;
    }
    // Left and right pointers
    let left = 0;
    let right = nums.length - 1;
    // Process the array from both sides
    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[left] <= nums[middle]) {
            if (target >= nums[left] && target <= nums[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            if (target >= nums[middle] && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }
    return -1;
};

module.exports = searchInRotatedSortedArray;