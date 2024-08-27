const isHappy = require('../../src/math/happy_number');

describe('HappyNumber', () => {

    test('should return true for happy numbers', () => {
        expect(isHappy(1)).toBe(true);
        expect(isHappy(7)).toBe(true);
        expect(isHappy(19)).toBe(true);
    });

    test('should return false for non-happy numbers', () => {
        expect(isHappy(2)).toBe(false);
        expect(isHappy(4)).toBe(false);
        expect(isHappy(20)).toBe(false);
        expect(isHappy(21)).toBe(false);
    });
});