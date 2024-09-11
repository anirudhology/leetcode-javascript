const sortColors = require('../../src/array/sort_colors');

test('sorts all zeros', () => {
    expect(sortColors([0, 0, 0])).toEqual([0, 0, 0]);
});

test('sorts all ones', () => {
    expect(sortColors([1, 1, 1])).toEqual([1, 1, 1]);
});

test('sorts all twos', () => {
    expect(sortColors([2, 2, 2])).toEqual([2, 2, 2]);
});

test('sorts mixed elements', () => {
    expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
});

test('sorts empty array', () => {
    expect(sortColors([])).toEqual([]);
});

test('sorts single element array', () => {
    expect(sortColors([1])).toEqual([1]);
});

test('sorts already sorted array', () => {
    expect(sortColors([0, 1, 2])).toEqual([0, 1, 2]);
});
