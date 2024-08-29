const mergeTriplets = require('../../src/greedy/merge_triplets_to_form_target_triplet');

test('all present triplets', () => {
    expect(mergeTriplets([[2, 5, 3], [1, 8, 4], [1, 7, 5]], [2, 7, 5])).toBe(true);
});

test('not all present triplets', () => {
    expect(mergeTriplets([[2, 3, 4], [1, 2, 3], [1, 2, 3]], [3, 2, 5])).toBe(false);
});

test('single triplet match', () => {
    expect(mergeTriplets([[2, 5, 3]], [2, 5, 3])).toBe(true);
});

test('empty triplets array', () => {
    expect(mergeTriplets([], [1, 2, 3])).toBe(false);
});

test('large values in triplets', () => {
    expect(mergeTriplets([[100000, 100000, 100000], [99999, 99999, 99999]], [100000, 100000, 100000])).toBe(true);
});

test('zero target triplet', () => {
    expect(mergeTriplets([[0, 0, 0], [1, 1, 1], [0, 1, 0]], [0, 0, 0])).toBe(true);
});