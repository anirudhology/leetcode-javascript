const lastStoneWeight = require('../../src/heap/last_stone_weight');

test('lastStoneWeight - example test cases', () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
    expect(lastStoneWeight([2, 2])).toBe(-0); // -0?!!! because JS is stupid
    expect(lastStoneWeight([1])).toBe(1);
    expect(lastStoneWeight([])).toBe(0);
    expect(lastStoneWeight(null)).toBe(0);
});

test('lastStoneWeight - additional test cases', () => {
    expect(lastStoneWeight([10, 4, 2, 10])).toBe(2);
    expect(lastStoneWeight([10, 10, 10])).toBe(10);
    expect(lastStoneWeight([3, 3, 3, 3])).toBe(-0);
    expect(lastStoneWeight([8, 10, 4])).toBe(2);
    expect(lastStoneWeight([20])).toBe(20);
});