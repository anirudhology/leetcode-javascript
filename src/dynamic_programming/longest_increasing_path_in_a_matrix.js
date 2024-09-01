const longestIncreasingPath = matrix => {
    // Dimensions of the matrix
    const m = matrix.length;
    const n = matrix[0].length;
    // Lookup table to store the longest increasing path
    const lookup = Array.from({ length: m }, () => new Array(n).fill(0));
    // Longest increasing path
    let maxPath = 1;
    // Process every cell
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxPath = Math.max(maxPath, dfs(matrix, i, j, m, n, lookup));
        }
    }
    return maxPath;
};

const dfs = (matrix, i, j, m, n, lookup) => {
    // If we have already processed this cell
    if (lookup[i][j] !== 0) {
        return lookup[i][j];
    }
    // Directions
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    // Longest path
    let longestPath = 1;
    // DFS in all directions 
    for (const direction of directions) {
        const x = i + direction[0];
        const y = j + direction[1];
        // Check for boundaries
        if (x < 0 || x >= m || y < 0 || y >= n) {
            continue;
        }
        if (matrix[x][y] <= matrix[i][j]) {
            continue;
        }
        longestPath = Math.max(longestPath, 1 + dfs(matrix, x, y, m, n, lookup));
    }
    lookup[i][j] = longestPath;
    return longestPath;
};

module.exports = longestIncreasingPath;