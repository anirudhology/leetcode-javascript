const checkInclusion = require('../../src/sliding_window/permutation_in_string');

test('s1 is empty string', () => {
    expect(checkInclusion("", "anything")).toBe(true);
});

test('s2 is empty string', () => {
    expect(checkInclusion("anything", "")).toBe(false);
});

test('s1 is longer than s2', () => {
    expect(checkInclusion("longstring", "short")).toBe(false);
});

test('exact match', () => {
    expect(checkInclusion("abc", "cba")).toBe(true);
});

test('permutation in the middle of s2', () => {
    expect(checkInclusion("ab", "eidbaooo")).toBe(true);
});

test('permutation at the start of s2', () => {
    expect(checkInclusion("ab", "abdcba")).toBe(true);
});

test('permutation at the end of s2', () => {
    expect(checkInclusion("ab", "eidboaooab")).toBe(true);
});

test('no permutation', () => {
    expect(checkInclusion("ab", "eidboaoo")).toBe(false);
});

test('repeated characters in s1', () => {
    expect(checkInclusion("aabb", "bbbaaabbcc")).toBe(true);
});

test('repeated characters in s2', () => {
    expect(checkInclusion("abc", "aabbcc")).toBe(false);
});

test('different characters', () => {
    expect(checkInclusion("abc", "defghijkl")).toBe(false);
});
