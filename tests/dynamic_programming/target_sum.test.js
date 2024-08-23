const findTargetSumWays = require('../../src/dynamic_programming/target_sum');

test('findTargetSumWays - Simple Case', () => {
    expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5);
});

test('findTargetSumWays - Empty Array', () => {
    expect(findTargetSumWays([], 3)).toBe(0);
});

test('findTargetSumWays - Null Array', () => {
    expect(findTargetSumWays(null, 3)).toBe(0);
});

test('findTargetSumWays - No Solution', () => {
    expect(findTargetSumWays([1, 2, 3], 7)).toBe(0);
});

test('findTargetSumWays - Single Element Target Met', () => {
    expect(findTargetSumWays([5], 5)).toBe(1);
});

test('findTargetSumWays - Single Element Target Not Met', () => {
    expect(findTargetSumWays([5], 3)).toBe(0);
});
