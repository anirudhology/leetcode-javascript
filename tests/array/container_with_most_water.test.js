const maxArea = require('../../src/array/container_with_most_water');

describe('maxArea', () => {
    test('should return 0 for undefined array', () => {
        expect(maxArea(undefined)).toBe(0);
    });

    test('should return 0 for empty array', () => {
        expect(maxArea([])).toBe(0);
    });

    test('should return 0 for array with one element', () => {
        expect(maxArea([1])).toBe(0);
    });

    test('should return correct area for array with two elements', () => {
        expect(maxArea([1, 1])).toBe(1);
    });

    test('should return correct area for a typical case', () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });

    test('should return correct area for decreasing heights', () => {
        expect(maxArea([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(20);
    });

    test('should return correct area for increasing heights', () => {
        expect(maxArea([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(20);
    });

    test('should return correct area for same heights', () => {
        expect(maxArea([4, 4, 4, 4, 4])).toBe(16);
    });

    test('should return correct area for single high element', () => {
        expect(maxArea([1, 2, 4, 3])).toBe(4);
    });
});
