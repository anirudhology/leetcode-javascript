const maxSubArray = require('../../src/dynamic_programming/maximum_subarray');


test('maxSubArray single element', () => {
    expect(maxSubArray([5])).toBe(5);
});

test('maxSubArray all negative', () => {
    expect(maxSubArray([-1, -2, -3, -4])).toBe(-1);
});

test('maxSubArray mixed', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test('maxSubArray all positive', () => {
    expect(maxSubArray([1, 2, 3, 4, 5])).toBe(15);
});
