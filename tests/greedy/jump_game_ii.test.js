const jump = require('../../src/greedy/jump_game_ii');

test('single element array', () => {
    expect(jump([0])).toBe(0);
});

test('multiple jumps required', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
});

test('maximum jump at each step', () => {
    expect(jump([5, 4, 3, 2, 1, 0])).toBe(1);
});

test('array with zeros not blocking path', () => {
    expect(jump([2, 0, 2, 0, 1])).toBe(2);
});