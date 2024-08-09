const numDecodings = require('../../src/dynamic_programming/decode_ways');

test('numDecodings', () => {
    // Test case for null string
    expect(numDecodings(null)).toBe(0);

    // Test case for empty string
    expect(numDecodings("")).toBe(0);

    // Test case for string with a single character
    expect(numDecodings("1")).toBe(1);

    // Test case for string with multiple characters
    expect(numDecodings("12")).toBe(2); // "AB" (1 2) or "L" (12)

    // Test case for string with leading zeros
    expect(numDecodings("012")).toBe(0);

    // Test case for string with multiple decoding possibilities
    expect(numDecodings("226")).toBe(3); // "BBF" (2 2 6), "BZ" (2 26), "VF" (22 6)

    // Test case for string with no valid decodings
    expect(numDecodings("30")).toBe(0);

    // Test case for string with multiple valid decodings
    expect(numDecodings("11106")).toBe(2);
});