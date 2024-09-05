const foreignDictionary = require('../../src/graph/alien_dictionary');

describe('AlienDictionary', () => {
    test('valid order', () => {
        const words = ["wrt", "wrf", "er", "ett", "rftt"];
        expect(foreignDictionary(words)).toBe("wertf");
    });

    test('invalid order due to cycle', () => {
        const words = ["z", "x", "z"];
        expect(foreignDictionary(words)).toBe("");
    });

    test('invalid order due to prefix', () => {
        const words = ["abc", "ab"];
        expect(foreignDictionary(words)).toBe("");
    });

    test('single word', () => {
        const words = ["abc"];
        expect(foreignDictionary(words)).toBe("abc");
    });

    test('empty words', () => {
        const words = [];
        expect(foreignDictionary(words)).toBe("");
    });

    test('no valid order', () => {
        const words = ["a", "b", "c"];
        expect(foreignDictionary(words)).toBe("abc");
    });
});