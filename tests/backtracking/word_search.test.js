const exist = require('../../src/backtracking/word_search');

test('Word exists in the board', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];
    expect(exist(board, 'ABCCED')).toBe(true);
    expect(exist(board, 'SEE')).toBe(true);
});

test('Word does not exist in the board', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];
    expect(exist(board, 'ABCB')).toBe(false);
    expect(exist(board, 'ABCD')).toBe(false);
});

test('Single character board', () => {
    const board = [['A']];
    expect(exist(board, 'A')).toBe(true);
    expect(exist(board, 'B')).toBe(false);
});

test('Empty board', () => {
    const board = [];
    expect(exist(board, 'A')).toBe(false);
});

test('Empty word', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];
    expect(exist(board, '')).toBe(false);
});

test('Word longer than board dimensions', () => {
    const board = [
        ['A', 'B', 'C'],
        ['S', 'F', 'E'],
        ['A', 'D', 'E']
    ];
    expect(exist(board, 'ABCDEE')).toBe(false);
});

test('Complex case', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];
    expect(exist(board, 'ABCCED')).toBe(true);
    expect(exist(board, 'SEE')).toBe(true);
    expect(exist(board, 'ABCB')).toBe(false);
});

test('Word with invalid characters', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];
    expect(exist(board, 'AB#C')).toBe(false);
});

test('Special case: null board', () => {
    expect(exist(null, 'A')).toBe(false);
});

test('Special case: null word', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];
    expect(exist(board, null)).toBe(false);
});

test('Word with spaces', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];
    expect(exist(board, 'A C')).toBe(false);
});

test('Word with mixed case', () => {
    const board = [
        ['a', 'B', 'C', 'E'],
        ['S', 'f', 'C', 'S'],
        ['A', 'd', 'e', 'E']
    ];
    expect(exist(board, 'ABCE')).toBe(false);
});
