const longestPalindrome = require('../../src/dynamic_programming/longest_palindromic_substring');

test('longestPalindrome', () => {
    // Test case for null string
    expect(longestPalindrome(null)).toBeNull();

    // Test case for empty string
    expect(longestPalindrome("")).toBe("");

    // Test case for single character string
    expect(longestPalindrome("a")).toBe("a");

    // Test case for string with all same characters
    expect(longestPalindrome("aaaa")).toBe("aaaa");

    // Test case for string with a palindromic substring in the middle
    expect(longestPalindrome("babad")).toBe("aba");

    // Test case for string with a palindromic substring at the end
    expect(longestPalindrome("cbbd")).toBe("bb");

    // Test case for string with no palindromic substring longer than one character
    expect(longestPalindrome("abc")).toBe("c");

    // Test case for string with the entire string as a palindrome
    expect(longestPalindrome("racecar")).toBe("racecar");
});