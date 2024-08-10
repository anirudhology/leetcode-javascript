const wordBreak = require('../../src/dynamic_programming/word_break');

test('wordBreak', () => {
    // Test case for null input string
    expect(wordBreak(null, ["leet", "code"])).toBe(false);

    // Test case for empty string
    expect(wordBreak("", ["leet", "code"])).toBe(false);

    // Test case for null wordDict
    expect(wordBreak("leetcode", null)).toBe(false);

    // Test case for empty wordDict
    expect(wordBreak("leetcode", [])).toBe(false);

    // Test case for string that can be segmented
    expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);

    // Test case for string that cannot be segmented
    expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);

    // Test case for string with overlapping words
    expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);

    // Test case for string with single character words
    expect(wordBreak("abcd", ["a", "b", "c", "d"])).toBe(true);
});