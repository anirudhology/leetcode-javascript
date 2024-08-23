const change = require('../../src/dynamic_programming/coin_change_ii');

test('Change Simple Case', () => {
    expect(change(5, [1, 2, 5])).toBe(4);
});

test('Change Zero Amount', () => {
    expect(change(0, [1, 2, 5])).toBe(1);
});

test('Change No Coins', () => {
    expect(change(5, [])).toBe(0);
});

test('Change Negative Amount', () => {
    expect(change(-1, [1, 2, 5])).toBe(0);
});

test('Change No Solution', () => {
    expect(change(3, [2])).toBe(0);
});