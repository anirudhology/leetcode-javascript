const topKFrequent = require("../../src/array/top_k_frequent_elements");

test('should return the top K frequent elements', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    expect(topKFrequent([1], 1)).toEqual([1]);
    expect(topKFrequent([1, 2], 2)).toEqual([1, 2]);
    expect(topKFrequent([3, 0, 1, 0], 1)).toEqual([0]);
    expect(topKFrequent([4, 4, 4, 3, 3, 2, 1], 2)).toEqual([4, 3]);
});

test('should return an empty array if nums is undefined or empty', () => {
    expect(topKFrequent(undefined, 1)).toEqual([]);
    expect(topKFrequent([], 1)).toEqual([]);
});

test('should return an empty array if k is negative', () => {
    expect(topKFrequent([1, 2, 3], -1)).toEqual([]);
});

test('should handle the case when k is zero', () => {
    expect(topKFrequent([1, 2, 3], 0)).toEqual([]);
});

test('should handle the case when nums contains negative numbers', () => {
    expect(topKFrequent([-1, -1, -2, -2, -2, -3], 2)).toEqual([-2, -1]);
});

test('should handle the case when nums contains zeros', () => {
    expect(topKFrequent([0, 0, 0, 1, 1, 1, 1, 2, 2], 1)).toEqual([1]);
});