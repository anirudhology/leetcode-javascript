const maxProfit = require('../../src/dynamic_programming/best_time_to_buy_and_sell_stocks_with_cooldown');

test('Max Profit Simple Case', () => {
    expect(maxProfit([1, 2, 3, 0, 2])).toBe(3);
});

test('Max Profit One Day', () => {
    expect(maxProfit([1])).toBe(0);
});

test('Max Profit Two Days Profit', () => {
    expect(maxProfit([1, 2])).toBe(1);
});

test('Max Profit Two Days Loss', () => {
    expect(maxProfit([2, 1])).toBe(0);
});

test('Max Profit All Decreasing Prices', () => {
    expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
});