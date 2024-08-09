const countSubstrings = require('../../src/dynamic_programming/palindromic_substrings');

test('countSubstrings', () => {
    // Test case for null string
    expect(countSubstrings(null)).toBe(0);

    // Test case for empty string
    expect(countSubstrings("")).toBe(0);

    // Test case for single character string
    expect(countSubstrings("a")).toBe(1);

    // Test case for string with all same characters
    expect(countSubstrings("aaaa")).toBe(10);

    // Test case for string with mixed characters
    expect(countSubstrings("abc")).toBe(3);

    // Test case for string with palindromic substrings
    expect(countSubstrings("aaa")).toBe(6);
});