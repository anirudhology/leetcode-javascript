const numIslands = require('../../src/dfs/number_of_islands');

test('empty grid', () => {
    expect(numIslands([])).toBe(0);
});

test('null grid', () => {
    expect(numIslands(null)).toBe(0);
});

test('single island', () => {
    const grid = [
        ['1', '1', '0', '0'],
        ['1', '1', '0', '0'],
        ['0', '0', '0', '0'],
        ['0', '0', '0', '0']
    ];
    expect(numIslands(grid)).toBe(1);
});

test('multiple islands', () => {
    const grid = [
        ['1', '1', '0', '0', '1'],
        ['1', '0', '0', '1', '1'],
        ['0', '0', '1', '0', '0'],
        ['1', '0', '0', '1', '1']
    ];
    expect(numIslands(grid)).toBe(5);
});

test('no islands', () => {
    const grid = [
        ['0', '0', '0', '0'],
        ['0', '0', '0', '0']
    ];
    expect(numIslands(grid)).toBe(0);
});

test('mixed grid', () => {
    const grid = [
        ['1', '0', '1', '0'],
        ['0', '1', '0', '1'],
        ['1', '0', '1', '0']
    ];
    expect(numIslands(grid)).toBe(6);
});