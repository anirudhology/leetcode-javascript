const multiply = require('../../src/math/multiply_strings');

test('multiply with zero', () => {
    expect(multiply("0", "1234")).toBe("0");
    expect(multiply("5678", "0")).toBe("0");
});

test('multiply single digit numbers', () => {
    expect(multiply("3", "3")).toBe("9");
    expect(multiply("5", "9")).toBe("45");
});

test('multiply multi digit numbers', () => {
    expect(multiply("123", "456")).toBe("56088");
    expect(multiply("999", "999")).toBe("998001");
});