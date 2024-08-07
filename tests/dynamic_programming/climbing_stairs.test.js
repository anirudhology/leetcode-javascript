const climbStairs = require('../../src/dynamic_programming/climbing_stairs');

test('climbStairs', () => {
    // Test case for n = 0
    expect(climbStairs(0)).toBe(0);

    // Test case for n = 1
    expect(climbStairs(1)).toBe(1);

    // Test case for n = 2
    expect(climbStairs(2)).toBe(2);

    // Test case for n = 3
    expect(climbStairs(3)).toBe(3);

    // Test case for n = 4
    expect(climbStairs(4)).toBe(5);

    // Test case for n = 5
    expect(climbStairs(5)).toBe(8);
});