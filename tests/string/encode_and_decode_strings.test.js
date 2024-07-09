const { encode, decode } = require('../../src/string/encode_and_decode_strings');

describe('encode function', () => {
    test('encodes an array of strings correctly', () => {
        expect(encode(["hello", "world"])).toBe("5/hello5/world");
        expect(encode(["a", "b", "c"])).toBe("1/a1/b1/c");
        expect(encode([""])).toBe("0/");
        expect(encode(["hello", "", "world"])).toBe("5/hello0/5/world");
    });

    test('encodes an empty array as an empty string', () => {
        expect(encode([])).toBe("");
    });
});

describe('decode function', () => {
    test('decodes a string back into an array of strings correctly', () => {
        expect(decode("5/hello5/world")).toEqual(["hello", "world"]);
        expect(decode("1/a1/b1/c")).toEqual(["a", "b", "c"]);
        expect(decode("0/")).toEqual([""]);
        expect(decode("5/hello0/5/world")).toEqual(["hello", "", "world"]);
    });

    test('decodes an empty string as an empty array', () => {
        expect(decode("")).toEqual([]);
    });

    test('handles edge cases', () => {
        expect(decode("2/ab3/xyz")).toEqual(["ab", "xyz"]);
        expect(decode("10/abcdefghij")).toEqual(["abcdefghij"]);
    });
});
