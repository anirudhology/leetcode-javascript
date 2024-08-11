const maxAreaOfIsland = grid => {
    // Special case
    if (grid === null || grid.length === 0) {
        return 0;
    }
    // Dimensions of the grid
    const m = grid.length;
    const n = grid[0].length;
    // Area to keep track of visited cells
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    // Maximum area of island
    let maxArea = 0;
    // Process every cell in the grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const currentArea = dfs(grid, i, j, m, n, visited);
                maxArea = Math.max(maxArea, currentArea);
            }
        }
    }
    return maxArea;
};

const dfs = (grid, i, j, m, n, visited) => {
    // Base case
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
        return 0;
    }
    // Mark the current cell as visited
    visited[i][j] = true;
    if (grid[i][j] === 0) {
        return 0;
    }
    // Perform DFS
    return 1 + dfs(grid, i - 1, j, m, n, visited)
        + dfs(grid, i + 1, j, m, n, visited)
        + dfs(grid, i, j - 1, m, n, visited)
        + dfs(grid, i, j + 1, m, n, visited)
};

module.exports = maxAreaOfIsland;