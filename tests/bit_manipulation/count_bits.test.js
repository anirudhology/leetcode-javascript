const countBits = require('../../src/bit_manipulation/counting_bits');

test('count bits with zero', () => {
    expect(countBits(0)).toEqual([0]);
});

test('count bits with one', () => {
    expect(countBits(1)).toEqual([0, 1]);
});

test('count bits with two', () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
});

test('count bits with five', () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
});

test('count bits with ten', () => {
    expect(countBits(10)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
});