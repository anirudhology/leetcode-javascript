const reverse = require('../../src/math/reverse_integer');

test('reverse positive number', () => {
    expect(reverse(123)).toBe(321);
});

test('reverse negative number', () => {
    expect(reverse(-123)).toBe(-321);
});

test('reverse zero', () => {
    expect(reverse(0)).toBe(0);
});

test('reverse overflow', () => {
    expect(reverse(1534236469)).toBe(0);
});

test('reverse single digit', () => {
    expect(reverse(9)).toBe(9);
});
