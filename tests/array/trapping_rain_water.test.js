const trappingRainWater = require('../../src/array/trapping_rain_water');

describe('trappingRainWater', () => {
    test('returns 0 for an empty array', () => {
        expect(trappingRainWater([])).toBe(0);
    });

    test('returns 0 for an array with one element', () => {
        expect(trappingRainWater([1])).toBe(0);
    });

    test('returns 0 for an array with two elements', () => {
        expect(trappingRainWater([1, 2])).toBe(0);
    });

    test('returns 0 for an array with no trapping possible', () => {
        expect(trappingRainWater([1, 2, 3, 4, 5])).toBe(0);
    });

    test('returns correct amount of trapped water for typical case', () => {
        expect(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    });

    test('returns 0 for an array with all same heights', () => {
        expect(trappingRainWater([3, 3, 3, 3])).toBe(0);
    });

    test('returns 0 for an array with decreasing heights', () => {
        expect(trappingRainWater([5, 4, 3, 2, 1])).toBe(0);
    });

    test('returns 0 for an array with increasing heights', () => {
        expect(trappingRainWater([1, 2, 3, 4, 5])).toBe(0);
    });

    test('returns correct amount of trapped water for a V-shaped array', () => {
        expect(trappingRainWater([2, 0, 2])).toBe(2);
    });

    test('returns correct amount of trapped water for a complex case', () => {
        expect(trappingRainWater([4, 2, 0, 3, 2, 5])).toBe(9);
    });

    test('handles undefined input', () => {
        expect(trappingRainWater(undefined)).toBe(0);
    });
});
