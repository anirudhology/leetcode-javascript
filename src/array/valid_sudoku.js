const isValidSudoku = board => {
    // We need Hash Set to store the encodings of elements on the board
    const encodings = new Set();
    // Process the board one cell at a time
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // Current number
            const c = board[i][j];
            // Process only filled cells
            if (c != '.') {
                const rowString = c + " is present in row: " + i;
                const columnString = c + " is present in column: " + j;
                const blockString = c + " is present in block: " + Math.floor(i / 3) + "-" + Math.floor(j / 3);
                if (encodings.has(rowString) || encodings.has(columnString) || encodings.has(blockString)) {
                    return false;
                }
                encodings.add(rowString);
                encodings.add(columnString);
                encodings.add(blockString);
            }
        }
    }
    return true;
};

module.exports = isValidSudoku;