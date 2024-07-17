const largestRectangleArea = require('./path/to/your/largestRectangleArea');

describe('largestRectangleArea', () => {
    test('returns 0 for empty array', () => {
        expect(largestRectangleArea([])).toBe(0);
    });

    test('returns 0 for undefined input', () => {
        expect(largestRectangleArea(undefined)).toBe(0);
    });

    test('handles single element array', () => {
        expect(largestRectangleArea([2])).toBe(2);
    });

    test('calculates the largest rectangle in an increasing array', () => {
        expect(largestRectangleArea([1, 2, 3, 4, 5])).toBe(9);
    });

    test('calculates the largest rectangle in a decreasing array', () => {
        expect(largestRectangleArea([5, 4, 3, 2, 1])).toBe(9);
    });

    test('calculates the largest rectangle in a mixed array', () => {
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
    });

    test('calculates the largest rectangle when all heights are the same', () => {
        expect(largestRectangleArea([2, 2, 2, 2])).toBe(8);
    });

    test('calculates the largest rectangle for random heights', () => {
        expect(largestRectangleArea([6, 2, 5, 4, 5, 1, 6])).toBe(12);
    });

    test('handles large numbers', () => {
        const largeArray = Array(10000).fill(1);
        expect(largestRectangleArea(largeArray)).toBe(10000);
    });
});
