const combinationSum2 = require('../../src/backtracking/combination_sum_ii');

describe('CombinationSumII', () => {
    test('test case 1', () => {
        const candidates = [10, 1, 2, 7, 6, 1, 5];
        const target = 8;
        const expected = [
            [1, 1, 6],
            [1, 2, 5],
            [1, 7],
            [2, 6],
        ];
        expect(combinationSum2(candidates, target)).toEqual(expected);
    });

    test('test case 2', () => {
        const candidates = [2, 5, 2, 1, 2];
        const target = 5;
        const expected = [
            [1, 2, 2],
            [5],
        ];
        expect(combinationSum2(candidates, target)).toEqual(expected);
    });

    test('test case 3: Edge case, empty array', () => {
        const candidates = [];
        const target = 3;
        const expected = [];
        expect(combinationSum2(candidates, target)).toEqual(expected);
    });

    test('test case 4: Edge case, target is zero', () => {
        const candidates = [1, 2, 3];
        const target = 0;
        const expected = [[]];
        expect(combinationSum2(candidates, target)).toEqual(expected);
    });

    test('test case 5: Edge case, candidates are null', () => {
        const candidates = null;
        const target = 7;
        const expected = [];
        expect(combinationSum2(candidates, target)).toEqual(expected);
    });
});
