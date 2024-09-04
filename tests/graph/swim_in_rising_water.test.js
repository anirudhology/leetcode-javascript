const swimInWater = require('../../src/graph/swim_in_rising_water');

test('swimInWater', () => {
    // Test case 1
    const grid1 = [[0, 2], [1, 3]];
    expect(swimInWater(grid1)).toBe(3);

    // Test case 2
    const grid2 = [
        [0, 1, 2, 3, 4],
        [24, 23, 22, 21, 5],
        [12, 13, 14, 15, 16],
        [11, 17, 18, 19, 20],
        [10, 9, 8, 7, 6]
    ];
    expect(swimInWater(grid2)).toBe(16);

    // Edge case: single cell
    const grid3 = [[0]];
    expect(swimInWater(grid3)).toBe(0);

    // Edge case: larger grid
    const grid4 = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ];
    expect(swimInWater(grid4)).toBe(8);
});