const twoSum = require('../../src/array/two_sum');

describe('twoSum', () => {
    test('found at start', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('found at end', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    test('no result', () => {
        expect(() => twoSum([1, 2, 3, 4], 8)).toThrow('Invalid inputs!');
    });

    test('empty array', () => {
        expect(() => twoSum([], 5)).toThrow('Invalid inputs!');
    });

    test('single element', () => {
        expect(() => twoSum([5], 5)).toThrow('Invalid inputs!');
    });

    test('duplicates', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    test('negative numbers', () => {
        expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
    });

    test('zeroes', () => {
        expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
    });

    test('large numbers', () => {
        expect(twoSum([1000000000, 999999999, 1, 2], 1999999999)).toEqual([0, 1]);
    });

    test('undefined input', () => {
        expect(() => twoSum(undefined, 5)).toThrow('Invalid inputs!');
    });

    test('target not found', () => {
        expect(() => twoSum([1, 2, 3, 4, 5], 10)).toThrow('Invalid inputs!');
    });
});
