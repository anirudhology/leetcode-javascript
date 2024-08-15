const solve = require('../../src/dfs/surrounded_regions');

test('solve empty board', () => {
    const board = [];
    expect(solve(board)).toEqual(board);
});

test('solve null board', () => {
    const board = null;
    expect(solve(board)).toEqual(board);
});

test('solve single cell O', () => {
    const board = [['O']];
    const expected = [['O']];
    expect(solve(board)).toEqual(expected);
});

test('solve single cell X', () => {
    const board = [['X']];
    const expected = [['X']];
    expect(solve(board)).toEqual(expected);
});

test('solve small board', () => {
    const board = [
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X']
    ];
    const expected = [
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X']
    ];
    expect(solve(board)).toEqual(expected);
});