const searchInRotatedSortedArray = require('../../src/binary_search/search_in_rotated_sorted_array');

describe('searchInRotatedSortedArray', () => {
    test('should return the correct index when target is found', () => {
        expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
        expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0);
        expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6);
        expect(searchInRotatedSortedArray([1, 3], 1)).toBe(0);
        expect(searchInRotatedSortedArray([3, 1], 1)).toBe(1);
    });

    test('should return -1 when target is not found', () => {
        expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
        expect(searchInRotatedSortedArray([1], 0)).toBe(-1);
        expect(searchInRotatedSortedArray([], 1)).toBe(-1);
    });

    test('should handle edge cases', () => {
        expect(searchInRotatedSortedArray([1], 1)).toBe(0);
        expect(searchInRotatedSortedArray(undefined, 1)).toBe(-1);
    });
});
