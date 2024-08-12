const orangesRotting = grid => {
    // Special case
    if (grid === null || grid.length === 0) {
        return 0;
    }
    // Dimensions of the grid
    const m = grid.length;
    const n = grid[0].length;
    // Queue to store rotten oranges
    const cells = [];
    // Total number of fresh oranges
    let freshOranges = 0;
    // Populate the queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                cells.push([i, j]);
            } else if (grid[i][j] == 1) {
                freshOranges++;
            }
        }
    }
    // If there are no fresh oranges
    if (freshOranges === 0) {
        return 0;
    }
    // Total number of minutes to rot all oranges
    let minutes = 0;
    // Four directions
    const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    // Process all rotten oranges
    while (cells.length > 0) {
        minutes++;
        const size = cells.length;
        for (let i = 0; i < size; i++) {
            cell = cells.shift();
            // Check in all four directions
            for (let direction of directions) {
                const x = direction[0] + cell[0];
                const y = direction[1] + cell[1];
                if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] !== 1) {
                    continue;
                }
                cells.push([x, y]);
                grid[x][y] = 2;
                freshOranges--;
            }
        }
    }
    return freshOranges === 0 ? minutes - 1 : -1;
};

module.exports = orangesRotting;