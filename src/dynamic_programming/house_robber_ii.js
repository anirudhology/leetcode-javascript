const rob = nums => {
    // Total number of houses
    const n = nums.length;
    // Special case
    if (n === 1) {
        return nums[0];
    }
    if (n === 2) {
        return Math.max(nums[0], nums[1]);
    }
    return Math.max(robHelper(nums, 0, n - 2), robHelper(nums, 1, n - 1));
};

const robHelper = (nums, start, end) => {
    let previous = 0;
    let current = 0;
    for (let i = start; i <= end; i++) {
        const temp = Math.max(previous + nums[i], current);
        previous = current;
        current = temp;
    }
    return current;
};

module.exports = rob;