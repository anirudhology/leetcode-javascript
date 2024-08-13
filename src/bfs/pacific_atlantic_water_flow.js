const pacificAtlantic = heights => {
    // List to store the valid coordinates
    const coordinates = [];
    // Special case
    if (heights === null || heights.length === 0) {
        return coordinates;
    }
    // Dimensions of the island
    const m = heights.length;
    const n = heights[0].length;
    // Boolean arrays to keep track of visited cells
    const pacificVisited = Array.from({ length: m }, () => Array(n).fill(false));
    const atlanticVisited = Array.from({ length: m }, () => Array(n).fill(false));
    // Queues to perform BFS for both the oceans
    const pacificCells = [];
    const atlanticCells = [];
    // Populate the coordinates of pacific and atlantic borders
    for (let i = 0; i < m; i++) {
        pacificCells.push([i, 0]);
        atlanticCells.push([i, n - 1]);
        pacificVisited[i][0] = true;
        atlanticVisited[i][n - 1] = true;
    }
    for (let j = 0; j < n; j++) {
        pacificCells.push([0, j]);
        atlanticCells.push([m - 1, j]);
        pacificVisited[0][j] = true;
        atlanticVisited[m - 1][j] = true;
    }
    // Perform BFS on both the queues
    bfs(heights, pacificCells, pacificVisited, m, n);
    bfs(heights, atlanticCells, atlanticVisited, m, n);
    // Combine visited cells from both oceans
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacificVisited[i][j] && atlanticVisited[i][j]) {
                coordinates.push([i, j]);
            }
        }
    }
    return coordinates;
};

const bfs = (heights, cells, visited, m, n) => {
    // Four directions
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (cells.length > 0) {
        const cell = cells.shift();
        // Check in all four directions
        for (let direction of directions) {
            const x = direction[0] + cell[0];
            const y = direction[1] + cell[1];
            if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y] || heights[x][y] < heights[cell[0]][cell[1]]) {
                continue;
            }
            visited[x][y] = true;
            cells.push([x, y]);
        }
    }
};

module.exports = pacificAtlantic;