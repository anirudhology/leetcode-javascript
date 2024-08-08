const minCostClimbingStairs = require('../../src/dynamic_programming/min_cost_climbing_stairs');

test('minCostClimbingStairs', () => {
    // Test case for two elements array
    expect(minCostClimbingStairs([10, 15])).toBe(10);

    // Test case for more elements
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
});
