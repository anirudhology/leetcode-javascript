
const wallsAndGates = rooms => {
    // Special case
    if (rooms === null || rooms.length === 0) {
        return rooms;
    }
    // Dimensions of the rooms
    const m = rooms.length;
    const n = rooms[0].length;
    // Queue to mark rooms with gates
    const cells = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rooms[i][j] === 0) {
                cells.push([i, j]);
            }
        }
    }
    // Distance from the gate
    let distance = 0;
    // Four directions
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    // Process until we have cells
    while (cells.length > 0) {
        distance++;
        for (let i = cells.length; i > 0; i--) {
            // Get cell from the front
            const cell = cells.shift();
            // Check for all four directions
            for (let direction of directions) {
                const x = cell[0] + direction[0];
                const y = cell[1] + direction[1];
                if (x >= 0 && x < m && y >= 0 && y < n && rooms[x][y] === 2147483647) {
                    rooms[x][y] = distance;
                    cells.push([x, y]);
                }
            }
        }
    }
    return rooms;
}

module.exports = wallsAndGates;