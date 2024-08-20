const validTree = require('../../src/graph/graph_valid_tree');

test('valid tree - single node', () => {
    expect(validTree(1, [])).toBe(true);
});

test('valid tree - tree structure', () => {
    expect(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])).toBe(true);
});

test('valid tree - cycle exists', () => {
    expect(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]])).toBe(false);
});

test('valid tree - disconnected graph', () => {
    expect(validTree(4, [[0, 1], [2, 3]])).toBe(false);
});

test('valid tree - no edges multiple nodes', () => {
    expect(validTree(4, [])).toBe(false);
});
