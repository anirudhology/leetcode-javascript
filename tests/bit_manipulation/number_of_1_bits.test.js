const hammingWeight = require('../../src/bit_manipulation/number_of_1_bits');

test('hamming weight of zero', () => {
    expect(hammingWeight(0)).toBe(0);
});

test('hamming weight of one', () => {
    expect(hammingWeight(1)).toBe(1);
});

test('hamming weight of a large number', () => {
    expect(hammingWeight(11)).toBe(3); // binary 1011
});

test('hamming weight of a power of two', () => {
    expect(hammingWeight(16)).toBe(1); // binary 10000
});

test('hamming weight of mixed bits', () => {
    expect(hammingWeight(29)).toBe(4); // binary 11101
});
