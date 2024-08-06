const kClosest = require('../../src/heap/k_closest_points_to_origin');

test('kClosest', () => {
    expect(kClosest([[1, 3], [-2, 2]], 1)).toEqual([[-2, 2]]);
    expect(kClosest([[3, 3], [5, -1], [-2, 4]], 2)).toEqual([[3, 3], [-2, 4]]);
    expect(kClosest([[0, 1], [1, 0]], 1)).toEqual([[0, 1]]);
    expect(kClosest([[1, 1]], 1)).toEqual([[1, 1]]);
    expect(kClosest([], 0)).toEqual([]);
});