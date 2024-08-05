const solveNQueens = require('../../src/backtracking/n_queens');

test('solveNQueens', () => {
    expect(solveNQueens(4)).toEqual([
        ["..Q.", "Q...", "...Q", ".Q.."],
        [".Q..", "...Q", "Q...", "..Q."]
    ]);
    expect(solveNQueens(1)).toEqual([["Q"]]);
    expect(solveNQueens(0)).toEqual([]);
    expect(solveNQueens(2)).toEqual([]);
    expect(solveNQueens(3)).toEqual([]);
});
