const lengthOfLongestSubstring = require('../../src/sliding_window/longest_substring_without_repeating_characters');

test('empty string', () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
});

test('undefined string', () => {
    expect(lengthOfLongestSubstring(undefined)).toBe(0);
});

test('single character', () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
});

test('all unique characters', () => {
    expect(lengthOfLongestSubstring("abcde")).toBe(5);
});

test('all same characters', () => {
    expect(lengthOfLongestSubstring("aaaaa")).toBe(1);
});

test('mixed characters', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test('string with spaces', () => {
    expect(lengthOfLongestSubstring("a b c a b c b b")).toBe(3);
});

test('string with numbers', () => {
    expect(lengthOfLongestSubstring("1234567890")).toBe(10);
});

test('complex string', () => {
    expect(lengthOfLongestSubstring("pwwkewabcdef")).toBe(7);
});

test('string with special characters', () => {
    expect(lengthOfLongestSubstring("a!@#a!@#")).toBe(4);
});

test('string with mixed case characters', () => {
    expect(lengthOfLongestSubstring("aA")).toBe(2);
});

test('long string with repeating patterns', () => {
    expect(lengthOfLongestSubstring("abcabcabcabcabcabcabcabcabcabcabcabcabc")).toBe(3);
});
