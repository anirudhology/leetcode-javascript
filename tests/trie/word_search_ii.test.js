const findWords = require('../../src/trie/word_search_ii');
const TrieNodeWithWord = require('../../src/util/trie_node_with_word');

describe('findWords', () => {
    it('should return words found on the board', () => {
        const board = [
            ['o', 'a', 'a', 'n'],
            ['e', 't', 'a', 'e'],
            ['i', 'h', 'k', 'r'],
            ['i', 'f', 'l', 'v']
        ];
        const words = ["oath", "pea", "eat", "rain"];
        const result = findWords(board, words);
        expect(result).toEqual(expect.arrayContaining(["eat", "oath"]));
    });

    it('should return an empty array if no words are found', () => {
        const board = [
            ['a', 'b'],
            ['c', 'd']
        ];
        const words = ["xyz", "uvw"];
        const result = findWords(board, words);
        expect(result).toEqual([]);
    });

    it('should return an empty array for an empty board', () => {
        const board = [];
        const words = ["word"];
        const result = findWords(board, words);
        expect(result).toEqual([]);
    });

    it('should return an empty array for an empty word list', () => {
        const board = [
            ['a', 'b'],
            ['c', 'd']
        ];
        const words = [];
        const result = findWords(board, words);
        expect(result).toEqual([]);
    });

    it('should handle a board with one cell', () => {
        const board = [['a']];
        const words = ["a", "b"];
        const result = findWords(board, words);
        expect(result).toEqual(["a"]);
    });

    it('should return all matching words even with duplicates', () => {
        const board = [
            ['a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a'],
            ['a', 'a', 'a', 'a']
        ];
        const words = ["aaaa", "aaa", "aa"];
        const result = findWords(board, words);
        expect(result).toEqual(expect.arrayContaining(["aa", "aaa", "aaaa"]));
    });

    it('should return an empty array for no matching words', () => {
        const board = [
            ['a', 'b', 'c'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i']
        ];
        const words = ["xyz", "jkl"];
        const result = findWords(board, words);
        expect(result).toEqual([]);
    });
});