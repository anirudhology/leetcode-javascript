const maxCoins = require('../../src/dynamic_programming/burst_balloons');

describe('BurstBalloons', () => {
    test('maxCoins with a single balloon', () => {
        expect(maxCoins([5])).toBe(5);
    });

    test('maxCoins with two balloons', () => {
        expect(maxCoins([3, 1])).toBe(6);
    });

    test('maxCoins with multiple balloons', () => {
        expect(maxCoins([3, 1, 5, 8])).toBe(167);
    });

    test('maxCoins with no balloons', () => {
        expect(maxCoins([])).toBe(0);
    });

    test('maxCoins with a larger case', () => {
        expect(maxCoins([1, 2, 3, 4, 5, 6])).toBe(252);
    });
});
