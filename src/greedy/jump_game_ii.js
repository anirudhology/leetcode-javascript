const jump = nums => {
    // Total number of jumps requires
    let jumps = 0;
    // Pointers for the window
    let left = 0;
    let right = 0;
    // Process the elements in the array
    while (right < nums.length - 1) {
        // longest jump from the current position
        let longest = 0;
        // Now, we will try every position in this window
        for (let i = left; i <= right; i++) {
            longest = Math.max(longest, i + nums[i]);
        }
        // Update the pointers for new window
        left = right + 1;
        right = longest;
        jumps++;
    }
    return jumps;
};

module.exports = jump;