const spiralOrder = matrix => {
    // List to store the final output
    const spiral = [];
    // Special case
    if (matrix === null || matrix.length === 0) {
        return spiral;
    }
    // Dimensions of the matrix
    const m = matrix.length;
    const n = matrix[0].length;
    // Variables to keep track of top, bottom, left and right
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;
    // Process all elements from the left
    while (left <= right && top <= bottom) {
        // Move from left to right
        for (let i = left; i <= right; i++) {
            spiral.push(matrix[top][i]);
        }
        top++;
        // Move from top to bottom
        for (let i = top; i <= bottom; i++) {
            spiral.push(matrix[i][right]);
        }
        right--;
        // Check if we have reached out of bounds
        if (left > right || top > bottom) {
            break;
        }
        // Move from right to left
        for (let i = right; i >= left; i--) {
            spiral.push(matrix[bottom][i]);
        }
        bottom--;
        // Move from bottom to top
        for (let i = bottom; i >= top; i--) {
            spiral.push(matrix[i][left]);
        }
        left++;
    }
    return spiral;
};

module.exports = spiralOrder;