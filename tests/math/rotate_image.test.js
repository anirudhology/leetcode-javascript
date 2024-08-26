const rotate = require('../../src/math/rotate_image');

test('rotate a 3x3 matrix', () => {
    const matrix1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const expected1 = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
    ];
    rotate(matrix1);
    expect(matrix1).toEqual(expected1);
});

test('rotate a 4x4 matrix', () => {
    const matrix2 = [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16]
    ];
    const expected2 = [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11]
    ];
    rotate(matrix2);
    expect(matrix2).toEqual(expected2);
});

test('rotate a 1x1 matrix', () => {
    const matrix3 = [[1]];
    const expected3 = [[1]];
    rotate(matrix3);
    expect(matrix3).toEqual(expected3);
});

test('rotate an empty matrix', () => {
    const matrix4 = [];
    const expected4 = [];
    rotate(matrix4);
    expect(matrix4).toEqual(expected4);
});

test('rotate a null matrix', () => {
    const matrix5 = null;
    rotate(matrix5);
    expect(matrix5).toBeNull();
});