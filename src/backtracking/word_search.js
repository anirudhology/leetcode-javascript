const exist = (board, word) => {
    // Special case
    if (board === null || board.length === 0 || word === null || word.length === 0) {
        return false;
    }
    // Dimensions of the board
    const m = board.length;
    const n = board[0].length;
    // Process all elements on the board
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && search(board, i, j, m, n, word, 0)) {
                return true;
            }
        }
    }
    return false;
};

const search = (board, i, j, m, n, word, index) => {
    // Base case
    if (index === word.length) {
        return true;
    }
    // Handle out of bounds indices
    if (i >= m || i < 0 || j >= n || j < 0 || board[i][j] !== word[index]) {
        return false;
    }
    if (board[i][j] === '#') {
        return false;
    }
    const temp = board[i][j];
    board[i][j] = '#';
    const found = search(board, i - 1, j, m, n, word, index + 1)
        || search(board, i + 1, j, m, n, word, index + 1)
        || search(board, i, j - 1, m, n, word, index + 1)
        || search(board, i, j + 1, m, n, word, index + 1)
    board[i][j] = temp;
    return found;
}

module.exports = exist;