/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
    // Special case
    if (nums === undefined || nums.length === 0 || k < 0) {
        return nums;
    }
    // Length of the array
    const n = nums.length;
    // Array to store sliding window elements
    const slidingWindowMax = [];
    // Deque to store the elements of the sliding window
    const deque = [];
    // Process the string
    for (let i = 0; i < n; i++) {
        if (deque && deque[0] < i - k + 1) {
            deque.shift();
        }
        // Remove elements from the deque that are less than nums[i] as
        // they can never become max for this window
        while (deque && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        // Add current index to the queue
        deque.push(i);
        if (i >= k - 1) {
            slidingWindowMax.push(nums[deque[0]]);
        }
    }
    return slidingWindowMax;
};

module.exports = maxSlidingWindow;