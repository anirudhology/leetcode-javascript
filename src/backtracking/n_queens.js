const solveNQueens = n => {
    // List to store the combinations
    const combinations = [];
    // Special case
    if (n === 0) {
        return combinations;
    }
    // Create the chessboard
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    // Perform backtracking
    backtrack(board, 0, combinations);
    return combinations;
};

const backtrack = (board, index, combinations) => {
    // Base case
    if (index === board.length) {
        combinations.push(build(board));
        return;
    }
    for (let i = 0; i < board.length; i++) {
        if (check(board, i, index)) {
            board[i][index] = 'Q';
            backtrack(board, index + 1, combinations);
            board[i][index] = '.';
        }
    }
};

const check = (board, row, column) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < column; j++) {
            if (board[i][j] === 'Q' && (row + j === column + i || row + column === i + j || row === i)) {
                return false;
            }
        }
    }
    return true;
};

const build = board => {
    const combination = [];
    for (let i = 0; i < board.length; i++) {
        let s = '';
        for (let j = 0; j < board[0].length; j++) {
            s += board[i][j];
        }
        combination.push(s);
    }
    return combination;
};

module.exports = solveNQueens;