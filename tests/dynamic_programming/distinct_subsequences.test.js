const numDistinct = require('../../src/dynamic_programming/distinct_subsequences');

test('numDistinct with empty strings', () => {
    expect(numDistinct("", "")).toBe(1);
});

test('numDistinct with empty target', () => {
    expect(numDistinct("abc", "")).toBe(1);
});

test('numDistinct with empty source', () => {
    expect(numDistinct("", "abc")).toBe(0);
});

test('numDistinct with same strings', () => {
    expect(numDistinct("abc", "abc")).toBe(1);
});

test('numDistinct with general cases', () => {
    expect(numDistinct("babgbag", "bag")).toBe(5);
    expect(numDistinct("rabbbit", "rabbit")).toBe(3);
    expect(numDistinct("abc", "def")).toBe(0);
});