const kokoEatingBananas = require('../../src/binary_search/koko_eating_bananas');

describe('kokoEatingBananas', () => {
    test('should return 0 for empty piles', () => {
        expect(kokoEatingBananas([], 5)).toBe(0);
    });

    test('should return 0 for undefined piles', () => {
        expect(kokoEatingBananas(undefined, 5)).toBe(0);
    });

    test('should return 0 for zero or negative hours', () => {
        expect(kokoEatingBananas([3, 6, 7, 11], 0)).toBe(0);
        expect(kokoEatingBananas([3, 6, 7, 11], -1)).toBe(0);
    });

    test('should return the number of bananas in a single pile when only one hour is available', () => {
        expect(kokoEatingBananas([100], 1)).toBe(100);
    });

    test('should handle a single pile with multiple hours', () => {
        expect(kokoEatingBananas([100], 10)).toBe(10);
    });

    test('should handle multiple piles where Koko can exactly finish in h hours', () => {
        expect(kokoEatingBananas([3, 6, 7, 11], 8)).toBe(4);
    });

    test('should handle multiple piles with more hours than necessary', () => {
        expect(kokoEatingBananas([30, 11, 23, 4, 20], 6)).toBe(23);
    });

    test('should handle multiple piles with fewer hours than necessary', () => {
        expect(kokoEatingBananas([30, 11, 23, 4, 20], 5)).toBe(30);
    });

    test('should handle very large piles', () => {
        expect(kokoEatingBananas([1000000000], 2)).toBe(500000000);
    });

    test('should handle uniform piles with exact hours', () => {
        expect(kokoEatingBananas([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10)).toBe(1);
    });

    test('should handle uniform piles with more hours than piles', () => {
        expect(kokoEatingBananas([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 20)).toBe(1);
    });
});
