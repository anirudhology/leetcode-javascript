const canJump = require('../../src/greedy/jump_game');

test('single element array', () => {
    expect(canJump([0])).toBe(true);
});

test('all zeros except first', () => {
    expect(canJump([1, 0, 0, 0])).toBe(false);
});

test('sufficient jumps', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
});

test('insufficient jumps', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
});