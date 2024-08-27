const setZeroes = matrix => {
    // Special case
    if (matrix === null || matrix.length === 0) {
        return matrix;
    }
    // Dimensions of the matrix
    const m = matrix.length;
    const n = matrix[0].length;
    // Flags to mark if first row and first column supposed to be 0
    let firstRow = false;
    let firstColumn = false;
    // Traverse the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) {
                    firstRow = true;
                }
                if (j === 0) {
                    firstColumn = true;
                }
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    // Traverse remaining cells except the ones in first row
    // and first column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    // If the first row and first column are true
    if (firstRow) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    if (firstColumn) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    return matrix
};

module.exports = setZeroes;