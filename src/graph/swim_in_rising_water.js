const swimInWater = grid => {
    // Dimension of the grid
    const n = grid.length;
    // Array to store the visited cells
    const visited = Array.from({ length: n }, () => new Array(n).fill(false));
    // Min heap to store cells based on the nearest value
    const minHeap = [[grid[0][0], 0, 0]];
    visited[0][0] = true;
    // Four directions
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    // Process until there are elements in the heap
    while (minHeap.length > 0) {
        minHeap.sort((a, b) => a[0] - b[0]);
        const [time, i, j] = minHeap.shift();
        // Check if we have reached the last cell
        if (i === n - 1 && j === n - 1) {
            return time;
        }
        // Move in all four directions
        for (const direction of directions) {
            const x = i + direction[0];
            const y = j + direction[1];
            if (x < 0 || x >= n || y < 0 || y >= n || visited[x][y]) {
                continue;
            }
            visited[x][y] = true;
            minHeap.push([Math.max(grid[x][y], time), x, y]);
        }
    }
    return -1;
};

module.exports = swimInWater;