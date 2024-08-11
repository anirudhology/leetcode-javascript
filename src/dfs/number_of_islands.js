const numIslands = grid => {
    // Special case
    if (grid === null || grid.length === 0) {
        return 0;
    }
    // Dimensions of the grid
    const m = grid.length;
    const n = grid[0].length;
    // Total number of islands
    let count = 0;
    // Process every cell in the grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j, m, n);
                count++;
            }
        }
    }
    return count;
};

const dfs = (grid, i, j, m, n) => {
    // Base case
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
        return;
    }
    grid[i][j] = '0';
    // Perform DFS in all four directions
    dfs(grid, i - 1, j, m, n);
    dfs(grid, i + 1, j, m, n);
    dfs(grid, i, j - 1, m, n);
    dfs(grid, i, j + 1, m, n);
};

module.exports = numIslands;