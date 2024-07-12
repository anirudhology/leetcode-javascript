const isPalindrome = require('../../src/string/valid_palindrome');

describe('isPalindrome', () => {
    test('returns true for a null string', () => {
        expect(isPalindrome(undefined)).toBe(true);
    });

    test('returns true for an empty string', () => {
        expect(isPalindrome("")).toBe(true);
    });

    test('returns true for a single character string', () => {
        expect(isPalindrome("a")).toBe(true);
        expect(isPalindrome("Z")).toBe(true);
        expect(isPalindrome("1")).toBe(true);
    });

    test('returns true for valid palindromes', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
        expect(isPalindrome("racecar")).toBe(true);
        expect(isPalindrome("0P0")).toBe(true);
    });

    test('returns false for invalid palindromes', () => {
        expect(isPalindrome("hello")).toBe(false);
        expect(isPalindrome("race a car")).toBe(false);
        expect(isPalindrome("abc123")).toBe(false);
    });

    test('returns true for mixed alphanumeric valid palindromes', () => {
        expect(isPalindrome("A1b2B1a")).toBe(true);
    });

    test('returns false for mixed alphanumeric invalid palindromes', () => {
        expect(isPalindrome("A1b2B3a")).toBe(false);
    });

    test('returns true for strings with only special characters', () => {
        expect(isPalindrome("!@#$%^&*()_+")).toBe(true);
    });

    test('returns true for valid palindromes with special characters', () => {
        expect(isPalindrome("A man, a plan, a canal, Panama!")).toBe(true);
        expect(isPalindrome("No 'x' in Nixon")).toBe(true);
    });
});
