const reverseBits = require('../../src/bit_manipulation/reverse_bits');

test('reverse bits of zero', () => {
    expect(reverseBits(0)).toBe(0);
});

test('reverse bits of one', () => {
    expect(reverseBits(1)).toBe(0b10000000000000000000000000000000);
});

test('reverse bits of max integer', () => {
    expect(reverseBits(0xFFFFFFFF)).toBe(0xFFFFFFFF);
});

test('reverse bits of min integer', () => {
    expect(reverseBits(0x80000000 >>> 0)).toBe(1);
});

test('reverse bits of negative one', () => {
    expect(reverseBits(-1 >>> 0)).toBe(0xFFFFFFFF);
});

test('reverse bits of specific number', () => {
    expect(reverseBits(43261596)).toBe(964176192);
});