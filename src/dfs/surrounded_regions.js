const solve = board => {
    // Special case
    if (board === null || board.length === 0) {
        return board;
    }
    // Dimensions of the board
    const m = board.length;
    const n = board[0].length;
    // Capture boundary cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O' && (i === 0 || i === m - 1 || j === 0 || j === n - 1)) {
                boundaryDFS(board, i, j, m, n);
            }
        }
    }
    // Post-processing
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === '#') {
                board[i][j] = 'O';
            }
        }
    }
    return board;
};

const boundaryDFS = (board, i, j, m, n) => {
    // Check for invalid cells
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') {
        return;
    }
    // Mark the boundary cell
    board[i][j] = '#';
    // Perform DFS in all four directions
    boundaryDFS(board, i - 1, j, m, n);
    boundaryDFS(board, i + 1, j, m, n);
    boundaryDFS(board, i, j - 1, m, n);
    boundaryDFS(board, i, j + 1, m, n);
};

module.exports = solve;