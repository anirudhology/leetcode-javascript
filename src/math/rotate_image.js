const rotate = matrix => {
    // Special case
    if (!matrix) {
        return;
    }
    // Order of the matrix
    const n = matrix.length;
    // Left and right pointers
    let left = 0;
    let right = n - 1;
    while (left < right) {
        // Swap the elements at left and right
        const temp = matrix[right];
        matrix[right] = matrix[left];
        matrix[left] = temp;
        left++;
        right--;
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};

module.exports = rotate;