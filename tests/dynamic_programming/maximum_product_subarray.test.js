const maxProduct = require('../../src/dynamic_programming/maximum_product_subarray');

test('maxProduct', () => {
    // Test case for null input
    expect(maxProduct(null)).toBe(0);

    // Test case for empty array
    expect(maxProduct([])).toBe(0);

    // Test case for single positive element
    expect(maxProduct([2])).toBe(2);

    // Test case for single negative element
    expect(maxProduct([-2])).toBe(-2);

    // Test case for array with both positive and negative elements
    expect(maxProduct([2, 3, -2, 4])).toBe(6);

    // Test case for array with a zero
    expect(maxProduct([-2, 0, -1, 6, -4])).toBe(24);

    // Test case for all negative elements
    expect(maxProduct([-1, -3, -4])).toBe(12);

    // Test case for all positive elements
    expect(maxProduct([1, 2, 3, 4, 5, 6])).toBe(720);

    // Test case for array with a mix of positive, negative, and zero elements
    expect(maxProduct([-2, 0, -1, -3, 10, 6])).toBe(180);
});
