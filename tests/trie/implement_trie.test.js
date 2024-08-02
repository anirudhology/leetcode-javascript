const Trie = require('../../src/trie/implement_trie');
const TrieNode = require('../../src/util/trie_node');

describe('Trie', () => {
    let trie;

    beforeEach(() => {
        trie = new Trie();
    });

    test('should insert and search a word', () => {
        trie.insert('apple');
        expect(trie.search('apple')).toBe(true); // should return true
        expect(trie.search('app')).toBe(false);  // should return false
        expect(trie.startsWith('app')).toBe(true); // should return true
    });

    test('should insert a word that is a prefix of another word', () => {
        trie.insert('apple');
        trie.insert('app');
        expect(trie.search('app')).toBe(true); // should return true
    });

    test('should handle startsWith for different prefixes', () => {
        trie.insert('banana');
        expect(trie.startsWith('ban')).toBe(true);   // should return true
        expect(trie.startsWith('bana')).toBe(true);  // should return true
        expect(trie.startsWith('bananaa')).toBe(false); // should return false
        expect(trie.startsWith('xyz')).toBe(false);  // should return false
    });

    test('should insert duplicate words', () => {
        trie.insert('car');
        trie.insert('car');
        trie.insert('car');
        expect(trie.search('car')).toBe(true); // should return true
        expect(trie.startsWith('ca')).toBe(true); // should return true
    });

    test('should handle empty string', () => {
        trie.insert('');
        expect(trie.search('')).toBe(true); // should return true
        expect(trie.startsWith('')).toBe(true); // should return true
    });
});