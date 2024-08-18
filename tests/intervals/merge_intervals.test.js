const merge = require('../../src/intervals/merge_intervals');

test('merges overlapping intervals', () => {
    const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
    const result = [[1, 6], [8, 10], [15, 18]];
    expect(merge(intervals)).toEqual(result);
});

test('merges non-overlapping intervals', () => {
    const intervals = [[1, 4], [5, 6]];
    const result = [[1, 4], [5, 6]];
    expect(merge(intervals)).toEqual(result);
});

test('merges single interval', () => {
    const intervals = [[1, 4]];
    const result = [[1, 4]];
    expect(merge(intervals)).toEqual(result);
});

test('handles empty array', () => {
    const intervals = [];
    const result = [];
    expect(merge(intervals)).toEqual(result);
});

test('handles null input', () => {
    const intervals = null;
    const result = null;
    expect(merge(intervals)).toEqual(result);
});

test('merges continuous intervals', () => {
    const intervals = [[1, 4], [4, 5]];
    const result = [[1, 5]];
    expect(merge(intervals)).toEqual(result);
});
