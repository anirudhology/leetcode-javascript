const missingNumber = require('../../src/math/missing_number');

test('missing number with single element zero', () => {
    expect(missingNumber([0])).toBe(1);
});

test('missing number with single element one', () => {
    expect(missingNumber([1])).toBe(0);
});

test('missing number with no missing', () => {
    expect(missingNumber([0, 1, 2, 3, 4])).toBe(5);
});

test('missing number with missing in middle', () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
});

test('missing number with missing at end', () => {
    expect(missingNumber([0, 1, 3])).toBe(2);
});

test('missing number with large array', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
});

test('missing number empty array', () => {
    expect(missingNumber([])).toBe(0);
});