const maxAreaOfIsland = require('../../src/dfs/max_area_of_island');

test('empty grid', () => {
    expect(maxAreaOfIsland([])).toBe(0);
});

test('null grid', () => {
    expect(maxAreaOfIsland(null)).toBe(0);
});

test('single island', () => {
    const grid = [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    expect(maxAreaOfIsland(grid)).toBe(4);
});

test('multiple islands', () => {
    const grid = [
        [1, 0, 0, 1, 1],
        [0, 0, 1, 1, 0],
        [0, 1, 0, 0, 0],
        [1, 1, 0, 1, 1]
    ];
    expect(maxAreaOfIsland(grid)).toBe(4);
});

test('no islands', () => {
    const grid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    expect(maxAreaOfIsland(grid)).toBe(0);
});

test('mixed grid', () => {
    const grid = [
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0]
    ];
    expect(maxAreaOfIsland(grid)).toBe(1);
});
