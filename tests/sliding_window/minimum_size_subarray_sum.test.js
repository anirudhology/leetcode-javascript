const minSubArrayLen = require('../../src/sliding_window/minimum_size_subarray_sum');

test('empty array returns 0', () => {
    expect(minSubArrayLen(7, [])).toBe(0);
});

test('null array returns 0', () => {
    expect(minSubArrayLen(7, null)).toBe(0);
});

test('no subarray found returns 5', () => {
    expect(minSubArrayLen(15, [1, 2, 3, 4, 5])).toBe(5);
});

test('exact match returns correct length', () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
});

test('multiple matches returns shortest length', () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
});

test('single element returns correct length', () => {
    expect(minSubArrayLen(3, [3])).toBe(1);
});
