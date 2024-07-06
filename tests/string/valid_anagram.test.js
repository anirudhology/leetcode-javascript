const isAnagram = require('../../src/string/valid_anagram');

test('anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
    expect(isAnagram('triangle', 'integral')).toBe(true);
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
});

test('non-anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
    expect(isAnagram('rat', 'car')).toBe(false);
    expect(isAnagram('abcd', 'abce')).toBe(false);
});

test('different lengths', () => {
    expect(isAnagram('abc', 'abcd')).toBe(false);
    expect(isAnagram('a', '')).toBe(false);
});

test('empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
});

test('repeated characters', () => {
    expect(isAnagram('aabbcc', 'abcabc')).toBe(true);
    expect(isAnagram('aabbcc', 'aabbc')).toBe(false);
});

test('single characters', () => {
    expect(isAnagram('a', 'a')).toBe(true);
    expect(isAnagram('a', 'b')).toBe(false);
});