maxProfit = require('../../src/sliding_window/best_time_to_buy_and_sell_stocks');

describe('maxProfit', () => {
    test('should return 0 for undefined input', () => {
        expect(maxProfit(undefined)).toBe(0);
    });

    test('should return 0 for empty array', () => {
        expect(maxProfit([])).toBe(0);
    });

    test('should return 0 for single price', () => {
        expect(maxProfit([10])).toBe(0);
    });

    test('should return the correct max profit for all increasing prices', () => {
        expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    });

    test('should return 0 for all decreasing prices', () => {
        expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
    });

    test('should return the correct max profit for mixed prices', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    test('should return 0 when no profit can be made', () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });

    test('should return the correct max profit for prices with multiple peaks', () => {
        expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(4);
    });
});
