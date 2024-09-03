const minCostConnectPoints = require('../../src/graph/min_cost_to_connect_all_points');

test('minCostConnectPoints should return 0 for empty input', () => {
    expect(minCostConnectPoints([])).toBe(0);
});

test('minCostConnectPoints should return 0 for a single point', () => {
    expect(minCostConnectPoints([[0, 0]])).toBe(0);
});

test('minCostConnectPoints should return correct cost for two points', () => {
    expect(minCostConnectPoints([[0, 0], [1, 1]])).toBe(2);
});

test('minCostConnectPoints should return correct cost for multiple points', () => {
    expect(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]])).toBe(29);
});

test('minCostConnectPoints should return correct cost for negative points', () => {
    expect(minCostConnectPoints([[-1, -2], [1, 3], [4, 5]])).toBe(19);
});
