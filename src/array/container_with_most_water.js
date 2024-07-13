const maxArea = height => {
    // Special case
    if (height === undefined || height.length === 0) {
        return 0;
    }
    // Left and right pointers
    let left = 0;
    let right = height.length - 1;
    // Maximum area
    let maxArea = 0;
    // Process the array from both ends
    while (left <= right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        maxArea = Math.max(h * w, maxArea);
        // Update pointers accordingly
        if (height[left] < height[right]) {
            left++;
        } else if (height[left] > height[right]) {
            right--;
        } else {
            left++;
            right--;
        }
    }
    return maxArea;
};

module.exports = maxArea;