const minDistance = require('../../src/dynamic_programming/edit_distance');

test('minDistance with empty strings', () => {
    expect(minDistance("", "")).toBe(0);
});

test('minDistance with one empty string', () => {
    expect(minDistance("hello", "")).toBe(5);
    expect(minDistance("", "java")).toBe(4);
});

test('minDistance with same strings', () => {
    expect(minDistance("same", "same")).toBe(0);
});

test('minDistance with different strings', () => {
    expect(minDistance("horse", "ros")).toBe(3);
    expect(minDistance("intention", "execution")).toBe(5);
    expect(minDistance("flaw", "lawn")).toBe(2);
});
