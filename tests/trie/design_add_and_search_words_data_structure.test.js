const WordDictionary = require('../../src/trie/design_add_and_search_words_data_structure');

describe('WordDictionary', () => {
    let wordDictionary;

    beforeEach(() => {
        wordDictionary = new WordDictionary();
    });

    test('should add and search a word', () => {
        wordDictionary.addWord('hello');
        expect(wordDictionary.search('hello')).toBe(true);
        expect(wordDictionary.search('hell')).toBe(false);
        expect(wordDictionary.search('helloo')).toBe(false);
        expect(wordDictionary.search('hell.')).toBe(true);
        expect(wordDictionary.search('hel.o')).toBe(true);
    });

    test('should add and search multiple words', () => {
        wordDictionary.addWord('hello');
        wordDictionary.addWord('world');
        expect(wordDictionary.search('hello')).toBe(true);
        expect(wordDictionary.search('world')).toBe(true);
        expect(wordDictionary.search('hell')).toBe(false);
        expect(wordDictionary.search('worl')).toBe(false);
    });

    test('should handle search with wildcard', () => {
        wordDictionary.addWord('hello');
        expect(wordDictionary.search('h.llo')).toBe(true);
        expect(wordDictionary.search('he.lo')).toBe(true);
        expect(wordDictionary.search('hell.')).toBe(true);
        expect(wordDictionary.search('.....')).toBe(true);
        expect(wordDictionary.search('....')).toBe(false);
    });

    test('should return false for empty search in empty dictionary', () => {
        expect(wordDictionary.search('')).toBe(false);
    });

    test('should handle adding and searching for an empty string', () => {
        wordDictionary.addWord('');
        expect(wordDictionary.search('')).toBe(true);
        expect(wordDictionary.search('.')).toBe(false);
    });
});
