/**
 * @param {number[]} nums
 * @return {number}
 */
const findMinInRotatedSortedArray = nums => {
    // Left and right pointers
    let left = 0;
    let right = nums.length - 1;
    // Process the array
    while (left < right) {
        const middle = left + Math.floor((right - left) / 2);
        if (nums[middle] > nums[right]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return nums[left];
};

module.exports = findMinInRotatedSortedArray;