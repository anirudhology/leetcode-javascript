const trappingRainWater = height => {
    // Special case
    if (height === undefined || height.length === 0) {
        return 0;
    }
    // Left and right pointers
    let left = 0;
    let right = height.length - 1;
    // Variables to keep track of maximum height to the left
    // and maximum height to the right of the current element
    let leftHeight = 0;
    let rightHeight = 0;
    // Area trapped by water
    let area = 0;
    // Process area from both ends
    while (left <= right) {
        if (height[left] <= height[right]) {
            area += Math.max(0, leftHeight - height[left]);
            leftHeight = Math.max(leftHeight, height[left]);
            left++;
        } else {
            area += Math.max(0, rightHeight - height[right]);
            rightHeight = Math.max(rightHeight, height[right]);
            right--;
        }
    }
    return area;
};

module.exports = trappingRainWater;