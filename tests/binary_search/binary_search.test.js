const binarySearch = require('../../src/binary_search/binary_search');

describe('binarySearch', () => {
    test('should return -1 for an undefined array', () => {
        expect(binarySearch(undefined, 5)).toBe(-1);
    });

    test('should return -1 for an empty array', () => {
        expect(binarySearch([], 5)).toBe(-1);
    });

    test('should return 0 for a one element array where the element is the target', () => {
        expect(binarySearch([5], 5)).toBe(0);
    });

    test('should return -1 for a one element array where the element is not the target', () => {
        expect(binarySearch([5], 3)).toBe(-1);
    });

    test('should return the correct index when the target is present', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
        expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    test('should return -1 when the target is not present', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 0)).toBe(-1);
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    });

    test('should handle arrays with duplicate elements', () => {
        expect(binarySearch([1, 2, 2, 2, 3, 4, 5], 2)).toBe(3);
    });
});
