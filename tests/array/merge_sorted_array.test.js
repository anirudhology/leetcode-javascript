const merge = require('../../src/array/merge_sorted_array');

test('merges both non-empty arrays', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    const m = 3;
    const n = 3;
    expect(merge(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6]);
});

test('merges with empty nums2', () => {
    const nums1 = [1, 2, 3];
    const nums2 = [];
    const m = 3;
    const n = 0;
    expect(merge(nums1, m, nums2, n)).toEqual([1, 2, 3]);
});

test('merges with empty nums1', () => {
    const nums1 = [0, 0, 0];
    const nums2 = [1, 2, 3];
    const m = 0;
    const n = 3;
    expect(merge(nums1, m, nums2, n)).toEqual([1, 2, 3]);
});

test('merges with both empty arrays', () => {
    const nums1 = [];
    const nums2 = [];
    const m = 0;
    const n = 0;
    expect(merge(nums1, m, nums2, n)).toEqual([]);
});

test('merges with single element in nums1', () => {
    const nums1 = [1];
    const nums2 = [];
    const m = 1;
    const n = 0;
    expect(merge(nums1, m, nums2, n)).toEqual([1]);
});

test('merges with single element in nums2', () => {
    const nums1 = [0];
    const nums2 = [1];
    const m = 0;
    const n = 1;
    expect(merge(nums1, m, nums2, n)).toEqual([1]);
});
