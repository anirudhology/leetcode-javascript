const findKthLargest = require('../../src/quick_select/kth_largest_element_in_an_array');

test('findKthLargest', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
    expect(findKthLargest([1], 1)).toBe(1);
    expect(findKthLargest([1, 2], 1)).toBe(2);
    expect(findKthLargest([-1, -1], 2)).toBe(-1);
});