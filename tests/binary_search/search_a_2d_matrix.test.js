const searchMatrix = require('../../src/binary_search/search_a_2d_matrix'); // Adjust the import according to your file structure

describe('searchMatrix', () => {
    test('should return false for undefined matrix', () => {
        expect(searchMatrix(undefined, 5)).toBe(false);
    });

    test('should return false for empty matrix', () => {
        expect(searchMatrix([], 5)).toBe(false);
    });

    test('should return true for single element matrix when element is found', () => {
        expect(searchMatrix([[5]], 5)).toBe(true);
    });

    test('should return false for single element matrix when element is not found', () => {
        expect(searchMatrix([[5]], 3)).toBe(false);
    });

    test('should return true for matrix when target is found', () => {
        const matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60]
        ];
        expect(searchMatrix(matrix, 3)).toBe(true);
        expect(searchMatrix(matrix, 11)).toBe(true);
        expect(searchMatrix(matrix, 60)).toBe(true);
    });

    test('should return false for matrix when target is not found', () => {
        const matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60]
        ];
        expect(searchMatrix(matrix, 0)).toBe(false);
        expect(searchMatrix(matrix, 6)).toBe(false);
        expect(searchMatrix(matrix, 61)).toBe(false);
    });

    test('should return false for matrix with empty rows', () => {
        const matrix = [
            [],
            [],
            []
        ];
        expect(searchMatrix(matrix, 5)).toBe(false);
    });

    test('should handle matrix with one row', () => {
        const matrix = [
            [1, 2, 3, 4, 5]
        ];
        expect(searchMatrix(matrix, 3)).toBe(true);
        expect(searchMatrix(matrix, 6)).toBe(false);
    });

    test('should handle matrix with one column', () => {
        const matrix = [
            [1],
            [2],
            [3],
            [4],
            [5]
        ];
        expect(searchMatrix(matrix, 3)).toBe(true);
        expect(searchMatrix(matrix, 6)).toBe(false);
    });
});
