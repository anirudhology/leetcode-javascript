const KthLargest = require('../../src/heap/kth_largest_element_in_a_stream');

test('KthLargest', () => {
    const nums = [4, 5, 8, 2];
    const kthLargest = new KthLargest(3, nums);

    expect(kthLargest.add(3)).toBe(4);  // returns 4
    expect(kthLargest.add(5)).toBe(5);  // returns 5
    expect(kthLargest.add(10)).toBe(5); // returns 5
    expect(kthLargest.add(9)).toBe(8);  // returns 8
    expect(kthLargest.add(4)).toBe(8);  // returns 8
});