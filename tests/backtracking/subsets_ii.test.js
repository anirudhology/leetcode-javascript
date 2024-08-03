const subsetsWithDup = require('../../src/backtracking/subsets_ii');

describe('SubsetsII', () => {
    test('subsetsWithDup [1, 2, 2]', () => {
        const nums = [1, 2, 2];
        const expected = [
            [], [1], [1, 2], [1, 2, 2], [2], [2, 2]
        ];
        expect(subsetsWithDup(nums)).toEqual(expect.arrayContaining(expected));
    });

    test('subsetsWithDup [4, 4, 4, 1, 4]', () => {
        const nums = [4, 4, 4, 1, 4];
        const expected = [
            [], [1], [1, 4], [1, 4, 4], [1, 4, 4, 4], [1, 4, 4, 4, 4], [4], [4, 4], [4, 4, 4], [4, 4, 4, 4]
        ];
        expect(subsetsWithDup(nums)).toEqual(expect.arrayContaining(expected));
    });

    test('subsetsWithDup []', () => {
        const nums = [];
        const expected = [];
        expect(subsetsWithDup(nums)).toEqual(expect.arrayContaining(expected));
    });

    test('subsetsWithDup null', () => {
        const nums = null;
        const expected = [];
        expect(subsetsWithDup(nums)).toEqual(expect.arrayContaining(expected));
    });
});