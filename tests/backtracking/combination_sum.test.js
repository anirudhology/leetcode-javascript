const combinationSum = require('../../src/backtracking/combination_sum');

describe('CombinationSum', () => {

    test('combinationSum of [2, 3, 6, 7] with target 7', () => {
        const candidates = [2, 3, 6, 7];
        const target = 7;
        const expected = [
            [2, 2, 3], [7]
        ];
        expect(combinationSum(candidates, target)).toEqual(expect.arrayContaining(expected));
    });

    test('combinationSum of [2, 3, 5] with target 8', () => {
        const candidates = [2, 3, 5];
        const target = 8;
        const expected = [
            [2, 2, 2, 2], [2, 3, 3], [3, 5]
        ];
        expect(combinationSum(candidates, target)).toEqual(expect.arrayContaining(expected));
    });

    test('combinationSum of [2] with target 1', () => {
        const candidates = [2];
        const target = 1;
        const expected = [];
        expect(combinationSum(candidates, target)).toEqual(expect.arrayContaining(expected));
    });

    test('combinationSum of [] with target 7', () => {
        const candidates = [];
        const target = 7;
        const expected = [];
        expect(combinationSum(candidates, target)).toEqual(expect.arrayContaining(expected));
    });
});