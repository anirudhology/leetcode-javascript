const coinChange = require('../../src/dynamic_programming/coin_change');

test('coinChange', () => {
    // Test case for null coins array
    expect(coinChange(null, 5)).toBe(-1);

    // Test case for empty coins array
    expect(coinChange([], 5)).toBe(-1);

    // Test case for negative amount
    expect(coinChange([1, 2, 5], -5)).toBe(-1);

    // Test case for amount 0
    expect(coinChange([1, 2, 5], 0)).toBe(0);

    // Test case for amount that can't be reached
    expect(coinChange([2], 3)).toBe(-1);

    // Test case for amount with exact coin matches
    expect(coinChange([1, 2, 5], 5)).toBe(1);

    // Test case for amount with no exact match but can be reached
    expect(coinChange([1, 2, 5], 11)).toBe(3); // 5+5+1

    // Test case for large amount
    expect(coinChange([1, 2, 5], 100)).toBe(20); // 20 coins of 5
});
