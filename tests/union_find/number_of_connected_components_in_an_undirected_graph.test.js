const countComponents = require('../../src/union_find/number_of_connected_components_in_an_undirected_graph');

test('test no edges', () => {
    const edges = [];
    expect(countComponents(4, edges)).toBe(4);
});

test('test fully connected graph', () => {
    const edges = [[0, 1], [1, 2], [2, 3]];
    expect(countComponents(4, edges)).toBe(1);
});

test('test multiple components', () => {
    const edges = [[0, 1], [2, 3]];
    expect(countComponents(4, edges)).toBe(2);
});

test('test single node', () => {
    const edges = [];
    expect(countComponents(1, edges)).toBe(1);
});

test('test empty graph', () => {
    const edges = [];
    expect(countComponents(0, edges)).toBe(0);
});
