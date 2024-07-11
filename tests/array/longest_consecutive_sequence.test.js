const longestConsecutiveSequence = require('../../src/array/longest_consecutive_sequence');

describe('longestConsecutive', () => {
    test('returns 0 for an empty array', () => {
        expect(longestConsecutiveSequence([])).toBe(0);
    });

    test('returns 0 for undefined input', () => {
        expect(longestConsecutiveSequence(undefined)).toBe(0);
    });

    test('returns 1 for an array with a single element', () => {
        expect(longestConsecutiveSequence([1])).toBe(1);
    });

    test('returns 1 for an array with no consecutive sequence', () => {
        expect(longestConsecutiveSequence([10, 5, 100])).toBe(1);
    });

    test('returns correct length for an array with a consecutive sequence', () => {
        expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
    });

    test('returns correct length for an array with mixed numbers and repeated elements', () => {
        expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2, 2, 2])).toBe(4);
    });

    test('returns correct length for an array with duplicates', () => {
        expect(longestConsecutiveSequence([1, 2, 0, 1])).toBe(3);
    });

    test('returns correct length for an array with a large range', () => {
        expect(longestConsecutiveSequence([10, 1, 3, 5, 2, 4, 11])).toBe(5);
    });
});
