const canPartition = require('../../src/dynamic_programming/partition_equal_subset_sum');

test('canPartition', () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);
    expect(canPartition([1, 2, 3, 5])).toBe(false);
    expect(canPartition([1, 2, 5])).toBe(false);
    expect(canPartition([1, 2, 3, 4])).toBe(true);
    expect(canPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(true);
    expect(canPartition([])).toBe(false);
    expect(canPartition(null)).toBe(false);
    expect(canPartition([3])).toBe(false);
});