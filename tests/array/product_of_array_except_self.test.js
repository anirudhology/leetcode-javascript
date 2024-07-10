const productExceptSelf = require('../../src/array/product_of_array_except_self');

test('should return undefined for undefined input', () => {
    expect(productExceptSelf(undefined)).toBeUndefined();
});

test('should return input array if it has less than 2 elements', () => {
    expect(productExceptSelf([1])).toEqual([1]);
});

test('should return correct product array for two elements', () => {
    expect(productExceptSelf([1, 2])).toEqual([2, 1]);
});

test('should return correct product array for multiple elements', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test('should return correct product array when array contains a zero', () => {
    expect(productExceptSelf([1, 2, 0, 4])).toEqual([0, 0, 8, 0]);
});

test('should return correct product array when array contains multiple zeros', () => {
    expect(productExceptSelf([0, 0, 2, 4])).toEqual([0, 0, 0, 0]);
});

test('should return correct product array when array contains negative numbers', () => {
    expect(productExceptSelf([-1, 2, -3, 4])).toEqual([-24, 12, -8, 6]);
});

test('should return correct product array when array contains all same numbers', () => {
    expect(productExceptSelf([2, 2, 2, 2])).toEqual([8, 8, 8, 8]);
});
