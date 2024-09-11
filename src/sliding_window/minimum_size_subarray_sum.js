const minSubArrayLen = (target, nums) => {
    // Special case
    if (!nums) {
        return 0;
    }
    // Length of the array
    const n = nums.length;
    // Left and right pointers for window
    let left = 0;
    let right = 0;
    // Sum of window elements
    let windowSum = 0;
    // Minimum length
    let minLength = 1 << 31 - 1;
    // Process the array
    while (right < n) {
        windowSum += nums[right];
        right++;
        // Squeeze the window, if possible
        while (windowSum >= target) {
            minLength = Math.min(minLength, right - left);
            windowSum -= nums[left];
            left++;
        }
    }
    return minLength === 1 << 31 - 1 ? 0 : minLength;
};

module.exports = minSubArrayLen;