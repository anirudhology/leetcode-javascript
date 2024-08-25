const getSum = require('../../src/bit_manipulation/sum_of_two_integers');

describe('SumOfTwoIntegers', () => {
    test('getSum both positive', () => {
        expect(getSum(2, 3)).toBe(5);
    });

    test('getSum one positive one negative', () => {
        expect(getSum(3, -2)).toBe(1);
    });

    test('getSum both negative', () => {
        expect(getSum(-2, -3)).toBe(-5);
    });

    test('getSum first zero', () => {
        expect(getSum(0, 4)).toBe(4);
    });

    test('getSum second zero', () => {
        expect(getSum(-4, 0)).toBe(-4);
    });

    test('getSum both zero', () => {
        expect(getSum(0, 0)).toBe(0);
    });
});