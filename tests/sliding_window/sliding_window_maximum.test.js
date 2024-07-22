const maxSlidingWindow = require('../../src/sliding_window/sliding_window_maximum');

describe('maxSlidingWindow', () => {
    test('should return an empty array when input array is empty', () => {
        expect(maxSlidingWindow([], 3)).toEqual([]);
    });

    test('should return the input array when k is 0', () => {
        expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 0)).toEqual([1, 3, -1, -3, 5, 3, 6, 7]);
    });

    test('should return the input array when k is 1', () => {
        expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 1)).toEqual([1, 3, -1, -3, 5, 3, 6, 7]);
    });

    test('should return the correct max sliding window for k=3', () => {
        expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
    });

    test('should return the correct max sliding window for k=4', () => {
        expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 4)).toEqual([3, 5, 5, 6, 7]);
    });

    test('should return an empty array when k is negative', () => {
        expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], -1)).toEqual([1, 3, -1, -3, 5, 3, 6, 7]);
    });

    test('should handle an array with one element', () => {
        expect(maxSlidingWindow([5], 1)).toEqual([5]);
    });

    test('should handle an array with all negative numbers', () => {
        expect(maxSlidingWindow([-4, -2, -7, -5, -3, -6, -1], 3)).toEqual([-2, -2, -3, -3, -1]);
    });

    test('should handle an array with all identical numbers', () => {
        expect(maxSlidingWindow([2, 2, 2, 2, 2, 2, 2], 3)).toEqual([2, 2, 2, 2, 2]);
    });
});
