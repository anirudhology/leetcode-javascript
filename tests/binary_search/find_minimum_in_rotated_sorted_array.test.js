const findMinInRotatedSortedArray = require('../../src/binary_search/find_minimum_in_rotated_sorted_array');

test('findMinInRotatedSortedArray with single element', () => {
    expect(findMinInRotatedSortedArray([1])).toBe(1);
});

test('findMinInRotatedSortedArray with no rotation', () => {
    expect(findMinInRotatedSortedArray([1, 2, 3, 4, 5])).toBe(1);
});

test('findMinInRotatedSortedArray with full rotation', () => {
    expect(findMinInRotatedSortedArray([1, 2, 3, 4, 5])).toBe(1);
});

test('findMinInRotatedSortedArray with half rotation', () => {
    expect(findMinInRotatedSortedArray([3, 4, 5, 1, 2])).toBe(1);
});

test('findMinInRotatedSortedArray with multiple rotations', () => {
    expect(findMinInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2])).toBe(0);
});

test('findMinInRotatedSortedArray with decreasing order', () => {
    expect(findMinInRotatedSortedArray([3, 2, 1])).toBe(1);
});

test('findMinInRotatedSortedArray with ascending order', () => {
    expect(findMinInRotatedSortedArray([1, 2, 3, 4, 5])).toBe(1);
});

test('findMinInRotatedSortedArray with min at end', () => {
    expect(findMinInRotatedSortedArray([2, 3, 4, 5, 1])).toBe(1);
});

test('findMinInRotatedSortedArray with min at start', () => {
    expect(findMinInRotatedSortedArray([1, 2, 3, 4, 5])).toBe(1);
});
