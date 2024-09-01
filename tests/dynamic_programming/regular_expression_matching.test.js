const isMatch = require('../../src/dynamic_programming/regular_expression_matching');

test('isMatch', () => {
    expect(isMatch("aa", "a*")).toBe(true);
    expect(isMatch("ab", ".*")).toBe(true);
    expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
    expect(isMatch("aab", "c*a*b")).toBe(true);
    expect(isMatch("ab", "a")).toBe(false);
    expect(isMatch("", ".*")).toBe(true);
    expect(isMatch("", "a*")).toBe(true);
    expect(isMatch("abcd", "d*")).toBe(false);
    expect(isMatch("aaa", "a*a")).toBe(true);
    expect(isMatch("aaa", "ab*a")).toBe(false);
});
