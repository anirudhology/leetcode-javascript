const eraseOverlapIntervals = require('../../src/intervals/non_overlapping_intervals');

test('erases overlapping intervals', () => {
    const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]];
    expect(eraseOverlapIntervals(intervals)).toBe(1);
});

test('handles non-overlapping intervals', () => {
    const intervals = [[1, 2], [2, 3], [3, 4]];
    expect(eraseOverlapIntervals(intervals)).toBe(0);
});

test('handles single interval', () => {
    const intervals = [[1, 2]];
    expect(eraseOverlapIntervals(intervals)).toBe(0);
});

test('handles empty array', () => {
    const intervals = [];
    expect(eraseOverlapIntervals(intervals)).toBe(0);
});

test('handles null input', () => {
    const intervals = null;
    expect(eraseOverlapIntervals(intervals)).toBe(0);
});

test('handles multiple overlapping intervals', () => {
    const intervals = [[1, 3], [2, 4], [3, 5], [1, 2]];
    expect(eraseOverlapIntervals(intervals)).toBe(2);
});
