const ladderLength = require('../../src/bfs/word_ladder');

describe('WordLadder', () => {
    test('ladderLength word exists', () => {
        const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
        const result = ladderLength("hit", "cog", wordList);
        expect(result).toBe(5);
    });

    test('ladderLength word does not exist', () => {
        const wordList = ["hot", "dot", "dog", "lot", "log"];
        const result = ladderLength("hit", "cog", wordList);
        expect(result).toBe(0);
    });

    test('ladderLength begin word equals end word', () => {
        const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
        const result = ladderLength("hit", "hit", wordList);
        expect(result).toBe(0);
    });

    test('ladderLength empty word list', () => {
        const wordList = [];
        const result = ladderLength("hit", "cog", wordList);
        expect(result).toBe(0);
    });
});