const longestCommonSubsequence = require('../../src/dynamic_programming/longest_common_subsequence');

test('LCS Simple Case', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
});

test('LCS No Common Subsequence', () => {
    expect(longestCommonSubsequence('abc', 'def')).toBe(0);
});

test('LCS Empty Strings', () => {
    expect(longestCommonSubsequence('', '')).toBe(0);
});

test('LCS One Empty String', () => {
    expect(longestCommonSubsequence('abcde', '')).toBe(0);
});

test('LCS Full Match', () => {
    expect(longestCommonSubsequence('abcde', 'abcde')).toBe(5);
});

test('LCS Reversed Strings', () => {
    expect(longestCommonSubsequence('abcde', 'edcba')).toBe(1);
});