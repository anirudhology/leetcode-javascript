const isInterleave = require('../../src/dynamic_programming/interleaving_string');

describe('InterleavingString', () => {

    test('should return true for interleaving strings', () => {
        expect(isInterleave("aabcc", "dbbca", "aadbbcbcac")).toBe(true);
        expect(isInterleave("", "", "")).toBe(true);
        expect(isInterleave("a", "", "a")).toBe(true);
        expect(isInterleave("", "b", "b")).toBe(true);
    });

    test('should return false for non-interleaving strings', () => {
        expect(isInterleave("aabcc", "dbbca", "aadbbbaccc")).toBe(false);
        expect(isInterleave("abc", "def", "abdccfe")).toBe(false);
    });

    test('should handle edge cases', () => {
        expect(isInterleave("abc", "def", "abcdefg")).toBe(false);
        expect(isInterleave("abc", "def", "adbcef")).toBe(true);
        expect(isInterleave("", "a", "b")).toBe(false);
    });
});