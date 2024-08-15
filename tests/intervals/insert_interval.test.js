const insert = require('../../src/intervals/insert_interval');

test('insert empty intervals', () => {
    const intervals = [];
    const newInterval = [2, 5];
    const expected = [[2, 5]];
    expect(insert(intervals, newInterval)).toEqual(expected);
});

test('insert non-overlapping before', () => {
    const intervals = [[1, 2], [3, 5]];
    const newInterval = [6, 8];
    const expected = [[1, 2], [3, 5], [6, 8]];
    expect(insert(intervals, newInterval)).toEqual(expected);
});

test('insert non-overlapping after', () => {
    const intervals = [[6, 7], [8, 10]];
    const newInterval = [2, 3];
    const expected = [[2, 3], [6, 7], [8, 10]];
    expect(insert(intervals, newInterval)).toEqual(expected);
});

test('insert overlapping merge', () => {
    const intervals = [[1, 3], [6, 9]];
    const newInterval = [2, 5];
    const expected = [[1, 5], [6, 9]];
    expect(insert(intervals, newInterval)).toEqual(expected);
});

test('insert overlapping all', () => {
    const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
    const newInterval = [4, 8];
    const expected = [[1, 2], [3, 10], [12, 16]];
    expect(insert(intervals, newInterval)).toEqual(expected);
});