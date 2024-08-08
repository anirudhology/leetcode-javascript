const rob = require('../../src/dynamic_programming/house_robber_ii');

test('rob', () => {
    // Test case for empty array
    expect(rob([])).toBe(0);

    // Test case for single element array
    expect(rob([10])).toBe(10);

    // Test case for two elements array
    expect(rob([10, 20])).toBe(20);

    // Test case for more elements
    expect(rob([2, 3, 2])).toBe(3);
    expect(rob([1, 2, 3, 1])).toBe(4);
    expect(rob([100, 2, 3, 100])).toBe(103);
});
