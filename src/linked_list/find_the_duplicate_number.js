const findTheDuplicateNumber = nums => {
    // Slow and fast pointers
    let slow = nums[0];
    let fast = nums[nums[0]];
    // Traverse until the two pointers meet
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    // Reset fast pointer
    fast = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};

module.exports = findTheDuplicateNumber;