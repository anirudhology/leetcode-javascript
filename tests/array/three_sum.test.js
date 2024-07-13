const threeSum = require('../../src/array/three_sum'); // Adjust the path if necessary

describe('threeSum', () => {
    // Test case 1: Normal case with multiple triplets
    test('should return unique triplets that sum to zero', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
            [-1, -1, 2],
            [-1, 0, 1]
        ]);
    });

    // Test case 2: Array with no triplets
    test('should return an empty array when no triplets sum to zero', () => {
        expect(threeSum([1, 2, -2, -1])).toEqual([]);
    });

    // Test case 3: Array with all elements being zero
    test('should return the triplet [0, 0, 0] when all elements are zero', () => {
        expect(threeSum([0, 0, 0, 0])).toEqual([
            [0, 0, 0]
        ]);
    });

    // Test case 4: Array with no valid triplet
    test('should return an empty array when no valid triplet exists', () => {
        expect(threeSum([1, 2, 3, 4, 5])).toEqual([]);
    });

    // Test case 5: Array with exactly three elements
    test('should return the triplet if it sums to zero', () => {
        expect(threeSum([-1, 0, 1])).toEqual([
            [-1, 0, 1]
        ]);
    });

    // Test case 6: Array with only two elements
    test('should return an empty array when there are less than 3 elements', () => {
        expect(threeSum([1, -1])).toEqual([]);
    });

    // Test case 7: Empty array
    test('should return an empty array when the input is empty', () => {
        expect(threeSum([])).toEqual([]);
    });
});
