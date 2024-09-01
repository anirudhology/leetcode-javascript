const longestIncreasingPath = require('../../src/dynamic_programming/longest_increasing_path_in_a_matrix');

describe('LongestIncreasingPathInAMatrix', () => {

    test('Single element matrix', () => {
        const matrix1 = [[5]];
        expect(longestIncreasingPath(matrix1)).toBe(1);
    });

    test('2x2 matrix with no increasing path', () => {
        const matrix2 = [[3, 2], [1, 0]];
        expect(longestIncreasingPath(matrix2)).toBe(3);
    });

    test('2x2 matrix with a simple increasing path', () => {
        const matrix3 = [[1, 2], [3, 4]];
        expect(longestIncreasingPath(matrix3)).toBe(3);
    });

    test('3x3 matrix with a more complex path', () => {
        const matrix4 = [
            [9, 9, 4],
            [6, 6, 8],
            [2, 1, 1]
        ];
        expect(longestIncreasingPath(matrix4)).toBe(4);
    });

    test('3x3 matrix with all elements the same', () => {
        const matrix5 = [
            [7, 7, 7],
            [7, 7, 7],
            [7, 7, 7]
        ];
        expect(longestIncreasingPath(matrix5)).toBe(1);
    });

    test('4x4 matrix with multiple increasing paths', () => {
        const matrix6 = [
            [1, 2, 3, 4],
            [2, 3, 4, 5],
            [6, 5, 4, 3],
            [7, 8, 9, 10]
        ];
        expect(longestIncreasingPath(matrix6)).toBe(9);
    });

});