const findKthLargest = (nums, k) => {
    k = nums.length - k;
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let pivotIndex = partition(nums, left, right);
        if (pivotIndex < k) {
            left = pivotIndex + 1;
        } else if (pivotIndex > k) {
            right = pivotIndex - 1;
        } else {
            break;
        }
    }
    return nums[k];
};

const partition = (nums, left, right) => {
    let pivot = nums[right];
    let pivotIndex = left;
    for (let i = left; i < right; i++) {
        if (nums[i] <= pivot) {
            [nums[pivotIndex], nums[i]] = [nums[i], nums[pivotIndex]];
            pivotIndex++;
        }
    }
    [nums[right], nums[pivotIndex]] = [nums[pivotIndex], nums[right]];
    return pivotIndex;
};

module.exports = findKthLargest;