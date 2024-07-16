const dailyTemperatures = require('../../src/stack/daily_temperatures');

describe('dailyTemperatures', () => {
    test('should return the input array when it is undefined', () => {
        expect(dailyTemperatures(undefined)).toBe(undefined);
    });

    test('should return the input array when it is empty', () => {
        expect(dailyTemperatures([])).toEqual([]);
    });

    test('should handle single element array', () => {
        expect(dailyTemperatures([30])).toEqual([0]);
    });

    test('should handle strictly increasing temperatures', () => {
        expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
    });

    test('should handle strictly decreasing temperatures', () => {
        expect(dailyTemperatures([60, 50, 40, 30])).toEqual([0, 0, 0, 0]);
    });

    test('should handle mixed temperatures', () => {
        expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });

    test('should handle array with all same temperatures', () => {
        expect(dailyTemperatures([50, 50, 50, 50])).toEqual([0, 0, 0, 0]);
    });

    test('should handle random order temperatures', () => {
        expect(dailyTemperatures([30, 31, 32, 33])).toEqual([1, 1, 1, 0]);
    });
});
