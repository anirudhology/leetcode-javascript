const spiralOrder = require('../../src/matrix/spiral_matrix');

describe('spiralOrder', () => {
    test('should handle empty matrix', () => {
        const matrix = [];
        const expected = [];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('should handle single element', () => {
        const matrix = [[1]];
        const expected = [1];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('should handle single row', () => {
        const matrix = [[1, 2, 3, 4]];
        const expected = [1, 2, 3, 4];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('should handle single column', () => {
        const matrix = [[1], [2], [3], [4]];
        const expected = [1, 2, 3, 4];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('should handle rectangular matrix', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('should handle 2x3 rectangular matrix', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6]
        ];
        const expected = [1, 2, 3, 6, 5, 4];
        expect(spiralOrder(matrix)).toEqual(expected);
    });
});
