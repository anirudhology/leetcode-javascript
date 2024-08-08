const rob = require('../../src/dynamic_programming/house_robber');

test('rob', () => {
    // Test case for single element array
    expect(rob([10])).toBe(10);

    // Test case for two elements array
    expect(rob([10, 20])).toBe(20);

    // Test case for more elements
    expect(rob([1, 2, 3, 1])).toBe(4);
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
    expect(rob([1, 2, 9, 4, 5, 10])).toBe(20);
});