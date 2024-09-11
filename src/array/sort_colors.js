const sortColors = nums => {
    // Pointers to keep track of 0s, 1s and 2s respectively
    let left = 0;
    let right = nums.length - 1;
    let middle = 0;
    // Process elements in the array
    while (middle <= right) {
        if (nums[middle] == 0) {
            swap(nums, left, middle);
            left++;
            middle++;
        } else if (nums[middle] === 1) {
            middle++;
        } else {
            swap(nums, middle, right);
            right--;
        }
    }
    return nums;
};

const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

module.exports = sortColors;