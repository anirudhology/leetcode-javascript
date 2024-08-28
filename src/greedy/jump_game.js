const canJump = nums => {
    // Current jump
    let jump = nums[0];
    // Process through the remaining array
    for (let i = 1; i < nums.length; i++) {
        if (jump < i) {
            return false;
        }
        jump = Math.max(jump, i + nums[i]);
    }
    return true;
};

module.exports = canJump;