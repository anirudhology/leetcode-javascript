const minWindow = require('../../src/sliding_window/minimum_window_substring');

test('Basic functionality', () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
});

test('t longer than s', () => {
    expect(minWindow("A", "AA")).toBe("");
});

test('t and s are same', () => {
    expect(minWindow("A", "A")).toBe("A");
});

test('t is substring of s', () => {
    expect(minWindow("BANC", "ABC")).toBe("BANC");
});

test('no possible window', () => {
    expect(minWindow("HELLOWORLD", "XYZ")).toBe("");
});

test('repeated characters in t', () => {
    expect(minWindow("AAABBB", "AA")).toBe("AA");
});

test('repeated characters in s', () => {
    expect(minWindow("AABCAD", "AABC")).toBe("AABC");
});

test('s and t have no common characters', () => {
    expect(minWindow("ABC", "DEF")).toBe("");
});

test('t contains all unique characters', () => {
    expect(minWindow("ADOBECODEBANC", "ABCDE")).toBe("ADOBEC");
});
