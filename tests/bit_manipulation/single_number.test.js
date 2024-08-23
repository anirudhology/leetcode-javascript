const singleNumber = require('../../src/bit_manipulation/single_number');

test('single number with single element', () => {
    expect(singleNumber([5])).toBe(5);
});

test('single number with multiple elements', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
});

test('single number with all negative elements', () => {
    expect(singleNumber([-3, -1, -1])).toBe(-3);
});

test('single number with mixed elements', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
});

test('single number with zeros', () => {
    expect(singleNumber([0, 1, 1])).toBe(0);
});