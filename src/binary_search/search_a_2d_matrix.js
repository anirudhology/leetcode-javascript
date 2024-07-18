/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    // Special case
    if (matrix === undefined || matrix.length === 0) {
        return false;
    }
    // Dimensions of the matrix
    const m = matrix.length;
    const n = matrix[0].length;
    // Start and end pointers for the range
    let start = 0;
    let end = m * n - 1;
    // Process the matrix
    while (start <= end) {
        const middle = start + Math.floor((end - start) / 2);
        const i = Math.floor(middle / n);
        const j = middle % n;
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return false;
};

module.exports = searchMatrix;