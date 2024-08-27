const setZeroes = require('../../src/matrix/set_matrix_zeroes');

describe('setZeroes', () => {
    test('should handle empty matrix', () => {
        const matrix = [];
        expect(setZeroes(matrix)).toEqual([]);
    });

    test('should handle single element zero', () => {
        const matrix = [[0]];
        expect(setZeroes(matrix)).toEqual([[0]]);
    });

    test('should handle single element non-zero', () => {
        const matrix = [[1]];
        expect(setZeroes(matrix)).toEqual([[1]]);
    });

    test('should handle matrix with no zeroes', () => {
        const matrix = [
            [1, 2],
            [3, 4]
        ];
        expect(setZeroes(matrix)).toEqual([
            [1, 2],
            [3, 4]
        ]);
    });

    test('should handle matrix with zeroes', () => {
        const matrix = [
            [1, 0, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        expect(setZeroes(matrix)).toEqual([
            [0, 0, 0],
            [4, 0, 6],
            [7, 0, 9]
        ]);
    });

    test('should handle matrix with multiple zeroes', () => {
        const matrix = [
            [0, 2, 3],
            [4, 5, 0],
            [7, 8, 9]
        ];
        expect(setZeroes(matrix)).toEqual([
            [0, 0, 0],
            [0, 0, 0],
            [0, 8, 0]
        ]);
    });
});