const orangesRotting = require('../../src/bfs/rotting_oranges');

describe('RottingOranges', () => {
    test('orangesRotting - empty grid', () => {
        const grid = [];
        expect(orangesRotting(grid)).toBe(0);
    });

    test('orangesRotting - no fresh oranges', () => {
        const grid = [
            [2, 2, 0],
            [2, 0, 2],
            [0, 2, 2]
        ];
        expect(orangesRotting(grid)).toBe(0);
    });

    test('orangesRotting - all fresh oranges', () => {
        const grid = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];
        expect(orangesRotting(grid)).toBe(-1);
    });

    test('orangesRotting - rotten spread', () => {
        const grid = [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1]
        ];
        expect(orangesRotting(grid)).toBe(4);
    });

    test('orangesRotting - rotten spread with unreachable', () => {
        const grid = [
            [2, 1, 1],
            [0, 1, 0],
            [1, 0, 1]
        ];
        expect(orangesRotting(grid)).toBe(-1);
    });
});
