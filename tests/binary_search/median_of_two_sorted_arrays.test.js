const findMedianSortedArrays = require('../../src/binary_search/median_of_two_sorted_arrays'); // adjust the path as necessary

describe('findMedianSortedArrays', () => {

    test('should find the median of one empty array and one non-empty array', () => {
        expect(findMedianSortedArrays([], [1])).toBe(1);
        expect(findMedianSortedArrays([2], [])).toBe(2);
    });

    test('should find the median of two arrays of different lengths', () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
        expect(findMedianSortedArrays([1, 3], [2, 4, 5])).toBe(3);
        expect(findMedianSortedArrays([2, 3], [1, 4])).toBe(2.5);
    });

    test('should find the median of two arrays of the same length', () => {
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
        expect(findMedianSortedArrays([1, 3], [2, 4])).toBe(2.5);
    });

    test('should find the median of arrays with negative numbers', () => {
        expect(findMedianSortedArrays([-3, -2, -1], [1, 2, 3])).toBe(0);
        expect(findMedianSortedArrays([-5, -3, -1], [-4, -2, 0, 1])).toBe(-2);
    });

    test('should find the median of arrays with duplicate numbers', () => {
        expect(findMedianSortedArrays([1, 2, 2], [2, 2, 3])).toBe(2);
        expect(findMedianSortedArrays([1, 1, 2, 2], [2, 3, 4, 4])).toBe(2);
    });

    test('should find the median of arrays with large numbers', () => {
        expect(findMedianSortedArrays([1000000], [1000001])).toBe(1000000.5);
        expect(findMedianSortedArrays([1000000, 1000002], [1000001, 1000003])).toBe(1000001.5);
    });

    test('should find the median of arrays with mixed small and large numbers', () => {
        expect(findMedianSortedArrays([1, 2], [1000000, 1000001])).toBe(500001);
        expect(findMedianSortedArrays([1, 1000001], [2, 1000000])).toBe(500001);
    });
});
