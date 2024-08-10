const lengthOfLIS = require('../../src/dynamic_programming/longest_increasing_subsequence');

test('lengthOfLIS', () => {
    // Test case for null input
    expect(lengthOfLIS(null)).toBe(0);

    // Test case for empty array
    expect(lengthOfLIS([])).toBe(0);

    // Test case for single element array
    expect(lengthOfLIS([10])).toBe(1);

    // Test case for array with all elements the same
    expect(lengthOfLIS([5, 5, 5, 5])).toBe(1);

    // Test case for array with strictly increasing elements
    expect(lengthOfLIS([1, 2, 3, 4])).toBe(4);

    // Test case for array with strictly decreasing elements
    expect(lengthOfLIS([5, 4, 3, 2, 1])).toBe(1);

    // Test case for array with mixed increasing and decreasing elements
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);

    // Test case for array with random elements
    expect(lengthOfLIS([3, 10, 2, 1, 20])).toBe(3);
});