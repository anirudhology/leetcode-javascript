const subsets = require('../../src/backtracking/subsets');

describe('subsets', () => {

    test('subsets of [1, 2, 3]', () => {
        const nums = [1, 2, 3];
        const expected = [
            [], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]
        ];
        expect(subsets(nums)).toEqual(expect.arrayContaining(expected));
    });

    test('subsets of [0]', () => {
        const nums = [0];
        const expected = [
            [], [0]
        ];
        expect(subsets(nums)).toEqual(expect.arrayContaining(expected));
    });

    test('subsets of []', () => {
        const nums = [];
        const expected = [];
        expect(subsets(nums)).toEqual(expect.arrayContaining(expected));
    });
});
