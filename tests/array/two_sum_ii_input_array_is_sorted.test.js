const twoSum = require('../../src/array/two_sum_ii_input_array_is_sorted');

test('returns the correct indices for a typical case', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
    expect(twoSum([1, 2, 3, 4, 4], 7)).toEqual([3, 5]);
    expect(twoSum([1, 2, 3, 4, 6], 10)).toEqual([4, 5]);
});

test('handles edge cases', () => {
    expect(twoSum([], 9)).toBeNull();
    expect(twoSum(undefined, 9)).toBeNull();
    expect(twoSum([1], 1)).toBeNull();
    expect(twoSum([1, 2], 3)).toEqual([1, 2]);
});