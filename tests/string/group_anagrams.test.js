const groupAnagrams = require('../../src/string/group_anagrams');

describe('groupAnagrams', () => {
    test('returns empty list for undefined input', () => {
        expect(groupAnagrams(undefined)).toEqual([]);
    });

    test('returns empty list for empty array input', () => {
        expect(groupAnagrams([])).toEqual([]);
    });

    test('groups anagrams correctly', () => {
        const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const output = groupAnagrams(input);
        const expected = [
            ["eat", "tea", "ate"],
            ["tan", "nat"],
            ["bat"]
        ];

        // Ensure that all groups match, order of groups and order within groups does not matter
        expect(output.length).toBe(expected.length);
        expected.forEach(group => {
            expect(output).toEqual(expect.arrayContaining([
                expect.arrayContaining(group)
            ]));
        });
    });

    test('handles case with single element', () => {
        const input = ["a"];
        const output = groupAnagrams(input);
        const expected = [["a"]];
        expect(output).toEqual(expected);
    });

    test('handles case with all identical elements', () => {
        const input = ["aa", "aa", "aa"];
        const output = groupAnagrams(input);
        const expected = [["aa", "aa", "aa"]];
        expect(output).toEqual(expected);
    });

    test('handles case with no anagrams', () => {
        const input = ["abc", "def", "ghi"];
        const output = groupAnagrams(input);
        const expected = [["abc"], ["def"], ["ghi"]];
        expect(output.length).toBe(expected.length);
        expected.forEach(group => {
            expect(output).toEqual(expect.arrayContaining([
                expect.arrayContaining(group)
            ]));
        });
    });

    test('handles case with mixed length strings', () => {
        const input = ["a", "ab", "ba", "abc", "cab", "bac"];
        const output = groupAnagrams(input);
        const expected = [
            ["a"],
            ["ab", "ba"],
            ["abc", "cab", "bac"]
        ];
        expect(output.length).toBe(expected.length);
        expected.forEach(group => {
            expect(output).toEqual(expect.arrayContaining([
                expect.arrayContaining(group)
            ]));
        });
    });
});
