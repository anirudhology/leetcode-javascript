const containsDuplicate = require('../../src/array/contains_duplicate');

describe('containsDuplicate', () => {
    test('returns false for an empty array', () => {
        expect(containsDuplicate([])).toBe(false);
    });

    test('returns false for undefined input', () => {
        expect(containsDuplicate(undefined)).toBe(false);
    });

    test('returns false for an array with one element', () => {
        expect(containsDuplicate([1])).toBe(false);
    });

    test('returns true for an array with duplicates', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

    test('returns false for an array with no duplicates', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });

    test('returns true for an array with multiple duplicates', () => {
        expect(containsDuplicate([1, 1, 2, 2, 3, 3])).toBe(true);
    });

    test('returns false for an array with unique elements including negatives', () => {
        expect(containsDuplicate([-1, -2, -3, 0])).toBe(false);
    });

    test('returns true for an array with duplicate negative numbers', () => {
        expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
    });
});
