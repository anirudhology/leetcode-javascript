const uniquePaths = require('../../src/dynamic_programming/unique_paths');

test('uniquePaths 3x7', () => {
    expect(uniquePaths(3, 7)).toBe(28);
});

test('uniquePaths 1x1', () => {
    expect(uniquePaths(1, 1)).toBe(1);
});

test('uniquePaths 2x2', () => {
    expect(uniquePaths(2, 2)).toBe(2);
});

test('uniquePaths 3x3', () => {
    expect(uniquePaths(3, 3)).toBe(6);
});

test('uniquePaths 7x3', () => {
    expect(uniquePaths(7, 3)).toBe(28);
});