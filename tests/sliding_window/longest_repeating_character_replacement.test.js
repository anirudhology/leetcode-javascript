const characterReplacement = require('../../src/sliding_window/longest_repeating_character_replacement');

describe('characterReplacement', () => {
    test('should return 0 for empty string', () => {
        expect(characterReplacement('', 2)).toBe(0);
    });

    test('should return 0 for undefined string', () => {
        expect(characterReplacement(undefined, 2)).toBe(0);
    });

    test('should return 0 for negative k', () => {
        expect(characterReplacement('AABABBA', -1)).toBe(0);
    });

    test('should return correct result for single character string', () => {
        expect(characterReplacement('A', 2)).toBe(1);
    });

    test('should return correct result for k greater than length', () => {
        expect(characterReplacement('ABCDE', 10)).toBe(5);
    });

    test('should return correct result for no replacement needed', () => {
        expect(characterReplacement('AAAA', 2)).toBe(4);
    });

    test('should return correct result for general case', () => {
        expect(characterReplacement('AABABBA', 1)).toBe(4);
    });

    test('should return correct result for mixed characters', () => {
        expect(characterReplacement('ABAB', 2)).toBe(4);
    });

    test('should return correct result for all different characters', () => {
        expect(characterReplacement('ABCDE', 0)).toBe(1);
    });

    test('should return correct result for k equal to 0', () => {
        expect(characterReplacement('ABCDE', 0)).toBe(1);
    });
});
